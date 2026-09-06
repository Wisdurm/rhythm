// Song
const notes = [72,48,71,79,59,55,83,59,55,48,59,55,48,59,55,59,55,74,50,72,78,60,54,84,60,54,50,60,54,50,60,54,83,60,54,72,48,71,79,59,55,83,59,55,48,59,55,48,59,55,59,55,76,52,71,79,62,55,86,62,55,83,47,71,57,51,75,47,81,59,51,83,57,51,48,67,79,59,55,59,55,66,78,48,62,74,59,55,48,55,59,59,71,59,55,62,74,43,64,76,54,50,54,50,67,79,43,59,71,54,50,43,54,50,57,69,54,50,59,71,48,67,79,59,55,59,55,66,78,48,69,81,59,55,48,59,55,59,55,71,83,50,69,81,60,57,60,57,66,78,50,62,74,60,57,50,57,60,60,72,60,57,62,74,48,67,79,59,55,59,55,69,81,48,66,78,59,55,48,59,55,66,78,59,55,67,79,43,66,78,54,50,54,50,62,74,43,59,71,54,50,43,54,50,57,69,54,50,59,71,48,67,79,59,55,59,55,66,78,48,62,74,59,55,48,59,71,59,55,59,55,62,74,43,66,78,59,54,50,59,54,50,67,79,43,60,72,59,54,51,43,59,54,51,63,75,59,54,50,62,74,48,55,67,59,55,76,59,55,48,74,59,55,48,59,55,67,59,55,50,69,60,54,60,54,78,50,74,60,54,50,59,54,71,60,54,72,47,74,59,54,59,54,74,47,74,59,54,72,47,59,54,71,57,54,69,47,71,62,55,83,62,55,47,78,57,51,47,59,51,57,51,48,81,60,57,60,57,74,48,81,60,57,48,60,57,83,60,57,84,50,86,62,54,62,54,50,78,62,54,50,62,54,79,60,54,81,47,86,59,56,59,56,47,80,59,56,47,59,56,81,62,59,56,83,48,76,60,57,60,57,47,78,59,51,76,47,75,59,51,63,57,51,72,48,71,79,59,55,83,59,55,48,59,55,48,59,55,59,55,74,50,72,78,60,54,84,60,54,50,60,54,50,60,54,83,60,54,72,48,71,79,59,55,83,59,55,48,59,55,48,59,55,59,55,76,52,71,79,62,55,86,62,55,83,47,71,57,51,75,47,81,59,51,83,57,51]
const noteLengths = [192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,384,384,192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,768,384,384,192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,384,384,192,384,192,192,384,384,384,384,384,384,384,384,384,384,384,192,192,384,384,768,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,384,192,192,192,384,384,384,384,384,384,384,384,384,384,384,384,384,384,576,576,384,384,192,384,384,192,192,384,384,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,384,384,384,384,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,384,192,192,192,384,384,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,384,384,192,192,384,384,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,384,384,192,192,384,384,384,384,384,768,768,384,384,384,384,384,384,384,576,576,384,384,192,192,192,384,384,384,384,384,384,384,768,768,384,384,384,384,384,384,384,384,384,576,576,384,384,384,192,384,384,384,384,384,384,384,384,384,384,384,384,384,384,384,768,384,384,384,768,384,384,192,384,384,768,384,384,384,768,384,384,384,384,384,384,768,384,384,192,384,384,384,384,384,384,384,768,384,384,384,384,384,384,384,384,384,384,192,384,384,384,384,384,384,384,768,384,384,768,384,384,384,768,384,384,192,384,384,384,384,384,768,384,384,384,384,384,384,768,384,384,192,384,384,384,384,384,384,384,768,384,384,384,384,384,768,384,384,192,384,384,384,384,384,384,384,768,384,384,384,384,384,768,384,384,192,384,384,384,384,384,384,384,384,768,384,384,384,384,384,384,384,384,384,192,960,384,384,384,384,384,192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,384,384,192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,768,384,384,192,384,192,192,384,384,960,384,384,384,384,384,192,384,384,384,384,192,384,192,192,384,384,384,384,384,384,384,384,384,384,384,192,192,384,384,1152,768,768]
const noteStarts = [0,0,192,384,384,384,576,960,960,1344,1728,1728,2112,2304,2304,2688,2688,3072,3072,3264,3456,3456,3456,3648,4032,4032,4416,4800,4800,5184,5376,5376,5376,5760,5760,6144,6144,6336,6528,6528,6528,6720,7104,7104,7488,7872,7872,8256,8448,8448,8832,8832,9216,9216,9408,9600,9600,9600,9792,10176,10176,10176,10560,10560,10944,10944,10944,11328,11328,11520,11520,11520,11904,11904,12288,12288,12288,12672,12672,13248,13248,13248,13248,13632,13632,13632,14016,14016,14400,14592,14784,14784,14784,14976,14976,14976,14976,15360,15360,15360,15744,15744,16320,16320,16320,16320,16704,16704,16704,17088,17088,17472,17664,17664,17856,17856,18048,18048,18048,18048,18432,18432,18432,18816,18816,19392,19392,19392,19392,19776,19776,19776,20160,20160,20544,20736,20736,21120,21120,21120,21120,21504,21504,21504,21888,21888,22464,22464,22464,22464,22848,22848,22848,23232,23232,23616,23808,24000,24000,24000,24192,24192,24192,24192,24576,24576,24576,24960,24960,25536,25536,25536,25536,25920,25920,25920,26304,26304,26688,26880,26880,27072,27072,27264,27264,27264,27264,27648,27648,27648,28032,28032,28608,28608,28608,28608,28992,28992,28992,29376,29376,29760,29952,29952,30144,30144,30336,30336,30336,30336,30720,30720,30720,31104,31104,31680,31680,31680,31680,32064,32064,32064,32448,32448,32832,32832,32832,33024,33024,33408,33408,33408,33408,33792,33792,33792,34176,34176,34176,34752,34752,34752,34752,34752,35136,35136,35136,35520,35520,35520,35904,36096,36096,36096,36096,36096,36480,36480,36480,36480,36480,36864,36864,36864,37248,37248,37632,37824,37824,38208,38400,38592,38592,38976,39168,39168,39168,39552,39552,39936,39936,40320,40320,40896,40896,41088,41280,41472,41664,41664,42048,42240,42240,42240,42624,42624,42624,43008,43008,43392,43392,43968,43968,44160,44352,44544,44736,44736,44928,45120,45312,45312,45312,45696,45696,45696,46080,46080,46464,46464,46848,47040,47040,47424,47616,47808,47808,48192,48384,48384,48768,48768,49152,49152,49536,49536,50112,50112,50304,50496,50688,50880,50880,51264,51456,51456,51456,51840,51840,51840,52224,52224,52608,52608,53184,53184,53568,53760,53952,53952,54336,54528,54528,54528,54912,54912,54912,55296,55296,55680,55680,56256,56256,56640,56832,57024,57024,57408,57600,57600,57600,57984,57984,57984,57984,58368,58368,58752,58752,59328,59328,59712,59712,60096,60096,60096,60480,60480,60672,60672,61056,61056,61056,61440,61440,61632,61824,61824,61824,62016,62400,62400,62784,63168,63168,63552,63744,63744,64128,64128,64512,64512,64704,64896,64896,64896,65088,65472,65472,65856,66240,66240,66624,66816,66816,66816,67200,67200,67584,67584,67776,67968,67968,67968,68160,68544,68544,68928,69312,69312,69696,69888,69888,70272,70272,70656,70656,70848,71040,71040,71040,71232,71616,71616,71616,72000,72000,72384,72384,72384,72768,72768,72960,72960,72960,73344,73344]
// Points
const värit = ["red", "orange", "yellow", "green", "blue", "purple"]
const ranks  = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+", "SS"]
// 1 note = 10 points at max accuracy, 0 points at minimum accuracy + 5 points simply for hitting it
let score = 0;
// Theoretical max score which could be achieved by the current point in time
let maxScore = 0;
// Song settings
let speedMultiplier = 1;
let nightcore = 0;
let volume = 1;
// How long it takes for a note to go from the top to the bottom
const noteSpeed = 1;
// Elements
const rowDivs = document.querySelectorAll(".row");
const flashDivs = document.querySelectorAll(".flash");
let noteDivs = [];
// Time when song started
let startTime;
// Which row notes are on
let noteRows = [];

function start()
{
		// Get settings
		volume = Math.max(document.getElementById("volume").value, 0.00001); // oscillator moment
		nightcore = document.getElementById("pitch").value;
		speedMultiplier = document.getElementById("speed").value;
		document.getElementById("settings").remove();
		startTime = Date.now();
		createNotes();
		// It takes some time for the initial notes to hit
		setTimeout(playSong, noteSpeed*1000);
}

function pressed(btn)
{
		const elapsed = (Date.now() - startTime)*speedMultiplier;
		const elapsedf = ((Date.now() - startTime - (noteSpeed*1000))*speedMultiplier);
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
						const off = Math.abs(noteStarts[index] - elapsedf);
						const s = ((noteSpeed*1000) - off)/100;
						score += s + 5;
						updateBoard();
						break;
				}
		}
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
		document.getElementById("score").textContent = Math.round(score);
		document.getElementById("accuracy").textContent = `${((score/maxScore)*100).toFixed(2)} %`;
}

function createNote(row)
{
		const div = document.createElement("img");
		div.src = "https://upload.wikimedia.org/wikipedia/commons/6/63/Star%2A.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";
		div.classList.add("note");
		div.style.animationDuration = `${noteSpeed}s`;
		setTimeout(()=>{
				if (div.parentElement != null) {
						console.log("Missed");
						deleteNote(div);
						updateBoard();
				}
		}, noteSpeed*1000);
		noteDivs.push(div);
		rowDivs[row].appendChild(div);
}

function deleteNote(div)
{
		maxScore += 15;
		div.remove();		
}

function createNotes()
{
		row = 0;
		for (let i = 0; i < notes.length; i++) {
				// Crop low notes
				if (notes[i] > 30) {
						// const row = Math.floor(Math.random()*4);
						noteRows.push(row);
						setTimeout(createNote.bind(this, row), noteStarts[i] / speedMultiplier);
						row = (row + 1) % 4;
				}
		}
}

function pRank(prosentti, plusMode)
{
		if (prosentti == 100)
				return 10
		else if (prosentti >= 95)
				return 9
		else if (prosentti >= 90)
				return 8
		else if (prosentti >= 85)
				return 7
		else if (prosentti >= 80)
				return 6
		else if (prosentti >= 75)
				return 5
		else if (prosentti >= 70)
				return 4
		else if (prosentti >= 65)
				return 3
		else if (prosentti >= 60)
				return 2
		else if (prosentti >= 55)
				return 1
		else
				return 0
}

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
