function playSound(selectorAudio) {
    const element = document.querySelector(selectorAudio);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const arrayOfKeyboard = document.querySelectorAll('.key');

for (let i = 0; i < arrayOfKeyboard.length; i ++) {
    const key = arrayOfKeyboard[i];
    const instrument = key.classList[1];
    const idAudio = `#sound_${instrument}`;

    key.onclick = () => {
        playSound(idAudio);
    }

    key.onkeydown = ((e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            key.classList.add('press');
        }
    });

    key.onkeyup = ((e) => {
        key.classList.add('press');
    });
}