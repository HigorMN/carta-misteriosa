const createSpan = () => {
  const letterText = document.getElementById('carta-texto').value;
  const generetedLetter = document.getElementById('carta-gerada');
  const phraseArray = letterText.split(' ');
  generetedLetter.innerText = '';

  for (let index = 0; index < phraseArray.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = phraseArray[index];
    generetedLetter.appendChild(span);
  }
};

const buttonCreate = document.getElementById('criar-carta');
buttonCreate.addEventListener('click', createSpan);
