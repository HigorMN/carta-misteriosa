const createSpan = () => {
  const letterText = document.getElementById('carta-texto').value;
  const generetedLetter = document.getElementById('carta-gerada');
  generetedLetter.innerText = '';
  const phraseArray = letterText.split(' ');

  for (let index = 0; index < phraseArray.length; index += 1) {
    if (letterText === '' || !letterText.trim()) {
      generetedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const span = document.createElement('span');
      span.innerText = phraseArray[index];
      generetedLetter.appendChild(span);
    }
  }
};

const buttonCreate = document.getElementById('criar-carta');
buttonCreate.addEventListener('click', createSpan);
