let imagensContainer = document.getElementById("imagens-container1");

let nomesImagens = [
    '1.jpg'
];

    

    for (let i = 0; i < nomesImagens.length; i++) {
        let novaImagem = document.createElement("img");
        novaImagem.src = 'assets/img/perfumes masculinos' + nomesImagens[i];
        novaImagem.alt = "Imagem " + (i + 1);
        imagensContainer.appendChild(novaImagem);
      }
