// Perfumes masculinos 
const caminhoOutrasImagens = 'assets/img/promocao/';

const divImagens = document.getElementById('imagens-container');
const caminhoImagens = 'assets/img/perfumes masculinos/';

for (let i = 1; i <= 24; i++) {
  const divConjunto = document.createElement('div');
  
  const img = document.createElement('img');
  img.src = caminhoImagens + i + '.jpg';
  divImagens.appendChild(img);

  const image = document.createElement('img');
  image.src = caminhoOutrasImagens + i + '.jpg';
  image.style.width = '100%'; 
  divConjunto.appendChild(image);

  divImagens.appendChild(divConjunto);
  
  
}




// Perfumes femininos
const caminhoOutrasImagensF= 'assets/img/promocao-feminina/';
const ImagensF = document.getElementById('imagens-container-2');
 const caminhoImagensF = 'assets/img/perfumes femininos/';

 for (let i = 1; i <= 18; i++) {

  const divConjuntoF = document.createElement('div');
  const img1 = document.createElement('img');
  img1.src = caminhoImagensF + i + '.jpg';
  img1.style.width = "100%";
  ImagensF.appendChild(img1);

  const imageP = document.createElement('img');
imageP.src = caminhoOutrasImagensF + i + '.jpg';
imageP.style.width = "100%";
divConjuntoF.appendChild(imageP);
ImagensF.appendChild(divConjuntoF);


}

// Menu toogle
// Menu toggle
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu(event) {
  event.preventDefault();
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Ocultar menu após o clique
const menuItems = document.querySelectorAll('#menu a');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});





 

 




