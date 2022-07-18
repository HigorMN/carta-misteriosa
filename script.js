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

const spanRandom = () => {
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];
  const span = document.getElementsByTagName('span');

  for (let index = 0; index < span.length; index += 1) {
    span[index].className = `${
      grupoEstilo[Math.floor(Math.random() * grupoEstilo.length)]
    } ${grupoTamanho[Math.floor(Math.random() * grupoTamanho.length)]} ${
      grupoRotacao[Math.floor(Math.random() * grupoRotacao.length)]
    } ${grupoInclinacao[Math.floor(Math.random() * grupoInclinacao.length)]}`;
  }
};

const buttonCreate = document.getElementById('criar-carta');
buttonCreate.addEventListener('click', () => {
  createSpan();
  spanRandom();
});
