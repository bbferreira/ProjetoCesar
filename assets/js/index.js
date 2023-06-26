// Perfumes masculinos 
const divImagens = document.getElementById('imagens-container');
const caminhoImagens = 'assets/img/perfumes masculinos/';

for (let i = 1; i <= 24; i++) {
  const img = document.createElement('img');
  img.src = caminhoImagens + i + '.jpg';
  divImagens.appendChild(img);
}


// Perfumes femininos

const ImagensF = document.getElementById('imagens-container-2');
 const caminhoImagensF = 'assets/img/perfumes femininos/';

 for (let i = 1; i <= 18; i++) {
  const img1 = document.createElement('img');
  img1.src = caminhoImagensF + i + '.jpg';
  img1.style.width = "100%";
  ImagensF.appendChild(img1);
}

// Gerar iamgens  promoção

const Promocao = document.getElementById('Promocao');
const caminho = '';