const divImagens = document.getElementById('imagens-container');
const caminhoImagens = '/assets/img/perfumes masculinos/';

for (let i = 1; i <= 24; i++) {
  const img = document.createElement('img');
  img.src = caminhoImagens + i + '.jpg';
  divImagens.appendChild(img);
}



const Imagens2 = document.getElementById('imagens-container2');
const caminhoImagens2 = '/assets/img/perfumes femininos/';

for (let i = 1; i <= 19; i++) {
  const img = document.createElement('img');
  img.src = caminhoImagens2 + i + '.jpg';
  Imagens2.appendChild(img);
}
