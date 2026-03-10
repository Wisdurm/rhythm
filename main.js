// biisi
const notes = [72,48,71,79,55,59,59,55,83,48,59,55,48,59,55,59,55,74,50,72,78,54,60,60,54,84,50,60,54,50,60,54,83,60,54,72,48,71,79,59,55,59,55,83,48,59,55,48,59,55,59,55,76,52,71,79,62,55,86,62,55,83,47,71,57,51,75,47,81,59,51,83,57,51,48,67,79,55,59,59,55,66,78,48,62,74,55,59,48,59,55,71,59,55,62,74,43,64,76,54,50,54,50,67,79,43,59,71,54,50,43,54,50,57,69,54,50,59,71,48,67,79,55,59,59,55,66,78,48,69,81,59,55,48,59,55,59,55,71,83,50,69,81,57,60,60,57,66,78,50,62,74,57,60,50,60,57,72,60,57,62,74,48,67,79,55,59,59,55,69,81,48,66,78,59,55,48,59,55,66,78,59,55,67,79,43,66,78,54,50,54,50,62,74,43,59,71,54,50,43,54,50,57,69,54,50,59,71,48,67,79,59,55,59,55,66,78,48,62,74,59,55,48,59,71,59,55,59,55,62,74,43,66,78,50,54,59,59,54,50,67,79,43,60,72,59,54,51,43,59,54,51,63,75,59,54,50,62,74,48,55,67,55,59,59,55,76,48,55,59,74,48,59,55,67,59,55,50,69,54,60,60,54,78,50,60,54,74,50,59,54,71,60,54,72,47,74,54,59,59,54,74,47,74,59,54,72,47,59,54,71,57,54,69,47,71,62,55,62,55,83,47,57,51,78,47,59,51,57,51,48,81,57,60,60,57,74,48,60,57,81,48,60,57,83,60,57,84,50,86,62,54,62,54,50,62,54,78,50,62,54,79,60,54,81,47,86,59,56,59,56,47,59,56,80,47,59,56,81,62,59,56,83,48,76,60,57,60,57,47,78,59,51,76,47,59,51,75,63,57,51,72,48,71,79,59,55,59,55,83,48,59,55,48,59,55,59,55,74,50,72,78,60,54,60,54,84,50,60,54,50,60,54,83,60,54,72,48,71,79,59,55,59,55,83,48,59,55,48,59,55,59,55,76,52,71,79,62,55,86,62,55,83,47,71,57,51,75,47,81,59,51,83,81,57,51]
const noteLengths = [192,384,192,192,576,576,384,384,960,384,576,576,192,384,384,384,384,192,384,192,192,576,576,384,384,960,384,576,576,192,384,384,768,384,384,192,384,192,192,576,576,384,384,960,384,576,576,192,384,384,384,384,192,384,192,192,576,576,384,384,384,384,384,384,384,384,384,192,192,384,384,768,384,384,384,768,768,576,576,384,384,384,384,384,576,576,576,576,192,384,384,192,384,384,384,384,384,384,384,576,576,384,384,384,384,384,576,576,576,576,192,384,384,192,192,384,384,384,384,384,768,768,576,576,384,384,384,384,384,576,576,576,576,192,384,384,384,384,384,384,384,768,768,576,576,384,384,384,384,384,576,576,576,576,192,384,384,192,384,384,384,384,384,768,768,576,576,384,384,384,384,384,576,576,576,576,192,384,384,192,192,384,384,384,384,384,768,768,576,576,384,384,384,384,384,576,576,576,576,192,384,384,192,192,384,384,384,384,384,768,768,576,576,384,384,384,384,384,576,576,384,384,192,192,192,384,384,384,384,384,384,384,768,768,576,576,576,384,384,384,384,384,384,576,576,384,384,384,192,384,384,384,384,384,384,384,384,384,384,384,384,384,576,576,384,384,768,384,384,384,768,192,384,384,768,384,384,384,768,576,576,384,384,384,384,384,384,768,192,384,384,384,384,384,384,384,768,576,576,384,384,384,384,384,384,384,384,192,384,384,384,384,384,384,384,768,576,576,384,384,768,384,384,384,768,192,384,384,384,384,384,768,576,576,384,384,384,384,384,384,768,192,384,384,384,384,384,384,384,768,576,576,384,384,384,384,384,768,192,384,384,384,384,384,384,384,768,576,576,384,384,384,384,384,768,192,384,384,384,384,384,384,384,384,768,576,576,384,384,384,384,384,384,384,192,384,384,960,384,384,384,192,384,192,192,576,576,384,384,960,384,384,384,192,384,384,384,384,192,384,192,192,576,576,384,384,960,384,384,384,192,384,384,768,384,384,192,384,192,192,576,576,384,384,960,384,384,384,192,384,384,384,384,192,384,192,192,576,576,384,384,384,384,384,384,384,384,384,192,192,384,384,3456,3072,3072,3072]
const noteStarts = [384,384,576,768,768,768,1344,1344,960,1728,2112,2112,2496,2688,2688,3072,3072,3456,3456,3648,3840,3840,3840,4416,4416,4032,4800,5184,5184,5568,5760,5760,5760,6144,6144,6528,6528,6720,6912,6912,6912,7488,7488,7104,7872,8256,8256,8640,8832,8832,9216,9216,9600,9600,9792,9984,9984,9984,10176,10560,10560,10560,10944,10944,11328,11328,11328,11712,11712,11904,11904,11904,12288,12288,12672,12672,12672,13056,13056,13632,13632,13632,13632,14016,14016,14016,14400,14400,14784,14976,14976,15168,15360,15360,15360,15360,15744,15744,15744,16128,16128,16704,16704,16704,16704,17088,17088,17088,17472,17472,17856,18048,18048,18240,18240,18432,18432,18432,18432,18816,18816,18816,19200,19200,19776,19776,19776,19776,20160,20160,20160,20544,20544,20928,21120,21120,21504,21504,21504,21504,21888,21888,21888,22272,22272,22848,22848,22848,22848,23232,23232,23232,23616,23616,24000,24192,24192,24384,24576,24576,24576,24576,24960,24960,24960,25344,25344,25920,25920,25920,25920,26304,26304,26304,26688,26688,27072,27264,27264,27456,27456,27648,27648,27648,27648,28032,28032,28032,28416,28416,28992,28992,28992,28992,29376,29376,29376,29760,29760,30144,30336,30336,30528,30528,30720,30720,30720,30720,31104,31104,31104,31488,31488,32064,32064,32064,32064,32448,32448,32448,32832,32832,33216,33216,33216,33408,33408,33792,33792,33792,33792,34176,34176,34176,34560,34560,34560,35136,35136,35136,35136,35136,35520,35520,35520,35904,35904,35904,36288,36480,36480,36480,36480,36480,36864,36864,36864,36864,36864,37248,37248,37248,37632,37632,38208,38208,38016,38592,38976,38976,38784,39360,39552,39552,39552,39936,39936,40320,40320,40704,40704,41280,41280,41472,41664,42048,42048,41856,42432,42624,42624,42624,43008,43008,43008,43392,43392,43776,43776,44352,44352,44544,44736,44928,45120,45120,45312,45504,45696,45696,45696,46080,46080,46080,46464,46464,46848,46848,47424,47424,47232,47808,48192,48192,48000,48576,48768,48768,49152,49152,49536,49536,49920,49920,50496,50496,50688,50880,51264,51264,51072,51648,51840,51840,51840,52224,52224,52224,52608,52608,52992,52992,53568,53568,53952,54336,54336,54144,54720,54912,54912,54912,55296,55296,55296,55680,55680,56064,56064,56640,56640,57024,57408,57408,57216,57792,57984,57984,57984,58368,58368,58368,58368,58752,58752,59136,59136,59712,59712,60096,60096,60480,60480,60480,60864,61056,61056,60864,61440,61440,61440,61824,61824,62016,62208,62208,62208,62784,62784,62400,63168,63552,63552,63936,64128,64128,64512,64512,64896,64896,65088,65280,65280,65280,65856,65856,65472,66240,66624,66624,67008,67200,67200,67200,67584,67584,67968,67968,68160,68352,68352,68352,68928,68928,68544,69312,69696,69696,70080,70272,70272,70656,70656,71040,71040,71232,71424,71424,71424,71616,72000,72000,72000,72384,72384,72768,72768,72768,73152,73152,73344,73344,73344,73728,73728,73728]



// Pisteet
const värit = ["red", "orange", "yellow", "green", "blue", "purple"]
const arvosanat = ["D", "C", "B", "A", "S", "SS"]
const arvosanatPlus = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "S+", "SS"]
const plusMode = true

var pisteet = 0
var maxPisteet = 0// Paras mahdollinen piste määrä
var combo = 0
var tulos = "" // Kertoo mitä olet saanut aikaan

var offset = 0
var index = 0

// Song settings
const speedMultiplier = 1.35;
var nightcore = 0;
const songDelay = 1.0 // how long to wait until starting playback of the music
var volume = 1;

// Deltatime
var LAST = 0
var NOW = 0
var deltatime = 1

// Elements
var noteRows = [];
for (let i = 0; i < 4; i++)
{    
	noteRows.push(document.getElementById("row" + i));
}

function Setup()
{
	// Get settings
	volume = document.getElementById("volume").value;
	if (volume == 0) 
		volume = 0.00001; // oscillator moment
	nightcore = document.getElementById("pitch").value;
	document.getElementById("settings").innerHTML = "" // Delete settings

	const pääDiv = document.getElementById("ohjaimet");

	for (let i = 0; i < 4; i++)
	{
		Nappi = document.createElement('button');
		Nappi.style.backgroundColor = "grey"
		Nappi.style.width = "25%"
		Nappi.style.height = "100%"
		Nappi.style.fontSize = "2.5rem"
		Nappi.id = i
		Nappi.textContent = i + 1;
		Nappi.addEventListener("click", () => PainaNappi(i) );
		pääDiv.append(Nappi);
		fitText(Nappi, 0.2)
	}
	// Aloita logiikka
	offset = Date.now();
	offset += 0 // Time it takes for notes to reach buttons (ms)
	playSong()
	setInterval(Logiikka, 10)
}
function Logiikka()
{
	LAST = NOW;
	NOW = Date.now();
	deltatime = (NOW - LAST) / 15

	// NOTE SPAWNING

	viimeNuottiPos = []
	while (noteStarts[index] < (Date.now() - offset)/speedMultiplier)
	{	
		// Logic for deciding to spawn note

		if (notes[index] < 20) // Trim out percussion/low notes
		{
			index++
			continue
		}
		nuottiPos = Math.round(Math.random()*3)
		crashout = false
		
		if (viimeNuottiPos.length > 3) // More than 4 notes simultaneously?
		{
			crashout = true
		}
		else
		{
			while (viimeNuottiPos.includes(nuottiPos)) // Don't put multiple notes on top of eachother, that's mean
			{
				nuottiPos = Math.round(Math.random()*3)
			}
		}

		// Spawn note

		var nuottiDiv = document.createElement("a")
		nuottiDiv.textContent = "★"
		nuottiDiv.style.position = "absolute"
		nuottiDiv.style.top = 0 + "%"
		nuottiDiv.style.left = 0
		nuottiDiv.style.right = 0
		nuottiDiv.style.zIndex = "9"

		// Add to screen
		noteRows[nuottiPos].append(nuottiDiv);

		if (crashout) // Offset extra note
		{
			nuottiDiv.style.top = "9%";
		}
	
		// Extra stuff

		viimeNuottiPos.push(nuottiPos)
		index++
	}

	// NOTE LOGIC

	noteRows.forEach((noteRow) => {
		noteRow.childNodes.forEach((noteDiv) => {
			// Logic per note element
			if (parseInt(noteDiv.style.top) > 200) { // Delete note
				// Delete note
				deleteNote(noteDiv);
				maxPisteet += 10;
				pisteet -= 2; // tupla rangaistus koska menettää myös tarkkuutta siitä että ei saanut pisteitä
				tulos = "Missed..."
				combo = 0
			}
			else // exists
			{
				// Movement
				noteDiv.style.top = (parseFloat(noteDiv.style.top) + (1.5*deltatime)) + "%";
				// Colour

				// 100 is the perfect timing
				if (parseInt(noteDiv.style.top) > 97 && parseInt(noteDiv.style.top) < 103) // Perfect
					noteDiv.style.color = "green"
				else if (parseInt(noteDiv.style.top) > 95 && parseInt(noteDiv.style.top) < 105) // Good 
					noteDiv.style.color = "orange"
				else if (parseInt(noteDiv.style.top) > 90 && parseInt(noteDiv.style.top) < 110) // Bad
					noteDiv.style.color = "red"
				else // Default
					noteDiv.style.color = "yellow"
				// Transparency
				if (parseInt(noteDiv.style.top) < 25)
				{
					noteDiv.style.opacity = (noteDiv.style.top * 4)/100
				}
				else if (parseInt(noteDiv.style.top) > 110)
				{   
					noteDiv.style.opacity = ((120 - noteDiv.style.top) * 10)/100
				}
				fitText(noteDiv, 0.1);
			}
		});
	});

	// RESET BUTTON COLOURS

	for (let i = 0; i < 4; i++)
	{
		nappi = document.getElementById(i);
		nappi.style.backgroundColor = "grey"
	}

	// INFOBOX

	prosentti = Math.round((pisteet/(maxPisteet))*100)
	if (isNaN(prosentti)) {
		prosentti = 100;
	}

	document.getElementById("score").textContent = pisteet

	document.getElementById("accuracy").textContent = prosentti + " %"

	document.getElementById("combo").textContent = combo
	document.getElementById("combo").style.color = värit[combo/20]

	if (plusMode)
		document.getElementById("rank").textContent = arvosanatPlus[Arvosana(prosentti, plusMode)]
	else
		document.getElementById("rank").textContent = arvosanat[Arvosana(prosentti, plusMode)]
	document.getElementById("rank").style.color = värit[Arvosana(prosentti, false)]

	document.getElementById("tulos").textContent = tulos
}

function deleteNote(div) {
	div.parentElement.removeChild(div);
}

function Arvosana(prosentti, plusMode)
{
	if (!plusMode) // Normal ranking
	{
		if (prosentti == 100)
			return 5
		else if (prosentti >= 90)
			return 4
		else if (prosentti >= 80)
			return 3
		else if (prosentti >= 70)
			return 2
		else if (prosentti >= 60)
			return 1
		else
			return 0
	}
	else        // Extended ranking
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
}
function PainaNappi(x)
{
	let osui = false;

	for (const noteDiv of noteRows[x].childNodes) {
		const korkeus = parseInt(noteDiv.style.top);
		if (korkeus > 90 && korkeus < 110)
		{
			// Poista nuotti
			deleteNote(noteDiv);
			combo++;
			osui = true;
			// Pisteet
			if (korkeus > 97 && korkeus < 103) // Täydellinen
			{
				pisteet += 10;
				tulos = "Perfect!"
			}
			else if (korkeus > 95 && korkeus < 105) // Hyvä 
			{
				pisteet += 9;
				tulos = "Good!"
			}
			else // Huono
			{
				pisteet += 6;
				tulos = "Bad..."
			}

			maxPisteet += 10;
			break;
		}
	};
	if (osui)
		document.getElementById(x).style.backgroundColor = "blue"
	else
	{
		document.getElementById(x).style.backgroundColor = "red"
		combo = 0
		pisteet -= 6;
		tulos = "Useless input!"
	}
}

// Näppäimistö input
document.addEventListener('keydown', function(event) {
if(event.keyCode == 68 || event.keyCode == 49) { // D
	PainaNappi(0)
}
else if(event.keyCode == 70 || event.keyCode == 50) { // F
	PainaNappi(1)
}
else if (event.keyCode == 74 || event.keyCode == 51) { // J
	PainaNappi(2)
}
else if (event.keyCode == 75 || event.keyCode == 52) { // K
	PainaNappi(3)
}
});

function playSong()
{
	// if you have another AudioContext class use that one, as some browsers have a limit
	var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

	// All arguments are optional:

	// duration of the tone in milliseconds. Default is 500
	// frequency of the tone in hertz. default is 440
	// volume of the tone. Default is 1, off is 0.
	// type of tone. Possible values are sine, square, sawtooth, triangle, and custom. Default is sine.
	// callback to use on end of tone
	function beep(time, duration, frequency, volume, type, callback) {
		
		// Seconds to milliseconds
		time /= 1000
		duration /= 1000

		oscillator = audioCtx.createOscillator();
		gainNode = audioCtx.createGain();
		
		oscillator.connect(gainNode);
		gainNode.connect(audioCtx.destination);
		
		if (volume){gainNode.gain.value = volume;}
		if (frequency){oscillator.frequency.value = frequency;}
		if (type){oscillator.type = type;}
		if (callback){oscillator.onended = callback;}
		
		gainNode.gain.exponentialRampToValueAtTime(
			volume, time + 1 // Take 1 "unit of time" to get to full volume, I think? Added this comments months after writing the code
		)
		gainNode.gain.exponentialRampToValueAtTime(
			0.000001, time + duration + 10 // Kind of arbitrary, I don't really know how this works and I have no idea what 10 does, it just sounds kinda good lol
		)

		oscillator.start(time + songDelay);
		oscillator.stop(time + duration + songDelay);
	};

	for (let i = 0; i < noteStarts.length; i++)
	{
		beep(noteStarts[i] * speedMultiplier, noteLengths[i] * speedMultiplier, MidiToFrequency(notes[i]-nightcore), volume, "triangle")
	}
}
function MidiToFrequency(MidiNumber) // This works I guess 🤷
{
	return (Math.pow(2, (MidiNumber - 69) / 12.0) * 440);
}


