const alphabet = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	ch: '----',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	ñ: '--.--',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..'
}

$('#morse').value = '.... --- .-.. .-  -- ..- -. -.. ---'
$('#sendMorse').addEventListener('click', getMorse)
$('#sendText').addEventListener('click', getText)

// convertir a morse
function getMorse() {
	const code = $('#morse').value,
		arrayCodeWord = code.split('  '),
		arrayText = []

	for (const word of arrayCodeWord) {
		const arrayCode = word.split(' ')
		if (arrayCode.length > 1) {
			for (const letter of arrayCode) {
				for (const key in alphabet) {
					if (alphabet[key] == letter) {
						arrayText.push(key)
					}
				}
			}
		}
		arrayText.push(' ')
	}
	$('#text').value = arrayText.toString().replace(/,/g, '').trim()
}

// convertir a text
function getText() {
	let text = $('#text').value
	text = text.toLowerCase()
	const arrayWord = text.split(' '),
		arrayCode = []

	for (const word of arrayWord) {
		const arrayLetter = Array.from(word)
		if (arrayLetter.length > 1) {
			for (const letter of arrayLetter) {
				for (const key in alphabet) {
					if (key == letter) {
						arrayCode.push(alphabet[key])
						arrayCode.push(' ')
					}
				}
			}
		}
		arrayCode.push(' ')
	}
	$('#morse').value = arrayCode.toString().replace(/,/g, '').trim()
}

//  Solo caracteres validos
function validateString(patron, event) {
	tecla = document.all ? event.keyCode : event.which

	//Tecla de retroceso para borrar, siempre la permite
	if (tecla == 8) {
		return true
	}
	tecla_final = String.fromCharCode(tecla)
	return patron.test(tecla_final)
}
