// Song
let notes = [];
let noteLengths = [];
let noteStarts = [];
// Points
const values = ["Awful", "Bad", "Good", "Great", "Amazing", "Perfect"]
const colours = ["darkred", "red", "orangered", "orange", "gold", "yellow", "green", "chartreuse", "blue", "purple", "pink"]
const ranks  = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+", "SS"]
const missValue = 5;
const noteValue = 10;
// 1 note = 10 points at max accuracy, 0 points at minimum accuracy + 5 points simply for hitting it
let score = 0;
let combo = 0;
// Theoretical max score which could be achieved by the current point in time
let maxScore = 0;
// Song settings
let speedMultiplier = 1;
let nightcore = 0;
let volume = 1;
// How long it takes for a note to go from the top to the button
const noteSpeed = 1.1;
// Extra time after reaching the button before deletion
const grace = 0.1;
// Elements
const rowDivs = document.querySelectorAll(".row");
const flashDivs = document.querySelectorAll(".flash");
let noteDivs = [];
// Time when song started
let startTime;
// Which row notes are on
let noteRows = [];

document.getElementById("uploadButton").addEventListener("click", async() => {
		const input = document.getElementById("fileInput");
		const data = new FormData();
		data.append('file', input.files[0]);
		try {
				const response = await fetch("http://localhost:1234/api/notes", {
						method: "POST",
						body: data
				});
				const json = await response.json();
				if (json.error) {
						alert(json.error);
						return;
				}
				notes = json.notes;
				noteLengths = json.noteLengths;
				noteStarts = json.noteStarts;
				const bpm = 60000000/json.tempo;
				speedMultiplier = bpm/156.60015660015662;
				document.getElementById("upload").classList.add("hidden");
				document.getElementById("settings").classList.remove("hidden");
			  fitText(document.getElementById('buttonReal'), 0.2)
		} catch (e) {
				console.error(e.message);
		}
});

function start()
{
		// Get settings
		volume = Math.max(document.getElementById("volume").value, 0.00001); // oscillator moment
		nightcore = document.getElementById("pitch").value;
		speedMultiplier *= document.getElementById("speed").value;
		document.getElementById("settings").remove();
		startTime = Date.now();
		createNotes();
		// It takes some time for the initial notes to hit
		setTimeout(playSong, (noteSpeed-grace)*1000);
}

function pressed(btn)
{
		const elapsed = (Date.now() - startTime)*speedMultiplier;
		const elapsedf = ((Date.now() - startTime - (noteSpeed*1000))*speedMultiplier);
		const elapsedOff = ((Date.now() - startTime - ((noteSpeed-grace)*1000))*speedMultiplier);
		// Index of first note onscreen
		let first = 0;
		for (;;first++) {
				if (noteStarts[first] > (elapsedf) || first > noteStarts.length) {
						break;
				}
		}
		// Index of last note onscreen
		let last = first;
		for (;;last++) {
				if (noteStarts[last] > (elapsed) || last > noteStarts.length) {
						break;
				}
		}
		for (let index = first; index < last; index++) {
				if (noteRows[index] == btn && noteDivs[index].parentElement != null) {
						deleteNote(noteDivs[index]);
						flashDivs[btn].classList.remove("flash");
						setTimeout(()=>{flashDivs[btn].classList.add("flash");}, 50);
						const off = Math.abs(noteStarts[index] - elapsedOff);
						const s = (((noteSpeed-grace)*1000) - off)/100;
						const p = Math.min(0.013546907275*Math.exp(0.6682542033007*s),10)
						combo++;
						score += p + missValue;
						updateBoard();
						// Popup
						popup(btn, p);
						break;
				}
		}
}

function popup(row, points)
{
		const div = document.createElement("span");
		const i = Math.floor(((values.length-1) / noteValue) * points);
		div.textContent = values[i];
		div.classList.add("popup");
		rowDivs[row].appendChild(div);
		setTimeout(()=>{div.remove();}, 1000);
}

// Keyboard input
document.addEventListener('keydown', function(event) {
		if (event.keyCode == 68 || event.keyCode == 49) { // D
				pressed(0);
		} else if(event.keyCode == 70 || event.keyCode == 50) { // F
				pressed(1);
		} else if (event.keyCode == 74 || event.keyCode == 51) { // J
				pressed(2);
		} else if (event.keyCode == 75 || event.keyCode == 52) { // K
				pressed(3);
		}
});

function updateBoard()
{
		const percent = (score/maxScore)*100;
		document.getElementById("score").textContent = Math.round(score);
		document.getElementById("accuracy").textContent = `${percent.toFixed(2)} %`;
		document.getElementById("rank").textContent = ranks[pRank(percent)];
		document.getElementById("rank").style.color = colours[pRank(percent)];
		document.getElementById("combo").textContent = combo
}

function createNote(row)
{
		const div = document.createElement("img");
		div.src = "https://upload.wikimedia.org/wikipedia/commons/6/63/Star%2A.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
		div.classList.add("note");
		div.style.animationDuration = `${noteSpeed}s`;
		setTimeout(()=>{
				if (div.parentElement == null)
						return
				deleteNote(div);
				combo = 0;
				updateBoard();
		}, noteSpeed*1000);
		noteDivs.push(div);
		rowDivs[row].appendChild(div);
}

function deleteNote(div)
{
		maxScore += 10 + missValue;
		div.remove();
}

function createNotes()
{
		let row = 0;
		let lastT = [];
		for (let i = 0; i < notes.length; i++) {
				//// Crop low notes
				// if (notes[i] < 30)
				// 		continue
				// // Remove more than 4 duplicates
				// if (lastT.length == 4)
				// 		lastT.shift();
				// lastT.push(noteStarts[i]);
				// if (lastT.reduce((acc,x)=>acc+x,0) == (noteStarts[i]*4)
				// 		&& lastT.length == 4) {
				// 		console.log(lastT);
				// 		continue;
				// }
				//const row = Math.floor(Math.random()*4);
				noteRows.push(row);
				setTimeout(createNote.bind(this, row), noteStarts[i] / speedMultiplier);
				row = (row + 1) % 4;
		}
}

pRank = (percent) => Math.max(Math.round(10-((100-percent)/5)), 0);

function playSong()
{
		// if you have another AudioContext class use that one, as some browsers have a limit
		let audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
		MidiToFrequency = (MidiNumber) => (Math.pow(2, (MidiNumber - 69) / 12.0) * 440);

		function beep(time, duration, frequency, volume, type)
		{
				// Oscillator and gainNode
				oscillator = audioCtx.createOscillator();
				gainNode = audioCtx.createGain();
				oscillator.connect(gainNode);
				gainNode.connect(audioCtx.destination);
				// Settings
				gainNode.gain.value = volume;
				oscillator.frequency.value = frequency;
				// Possible values are sine, square, sawtooth, triangle, and custom.
				oscillator.type = type;
				// Begin at max volume and fade out (a bit slowly) after
				gainNode.gain.exponentialRampToValueAtTime(volume, time + 1);
				gainNode.gain.exponentialRampToValueAtTime(0.000001, time + duration + 10);
				// Actual note
				oscillator.start(time);
				oscillator.stop(time + duration);
		};

		for (let i = 0; i < noteStarts.length; i++)
		{
				beep(noteStarts[i] / speedMultiplier / 1000,
						 noteLengths[i] / speedMultiplier / 1000,
						 MidiToFrequency(notes[i]-nightcore),
						 volume, "triangle"
						);
		}
}
