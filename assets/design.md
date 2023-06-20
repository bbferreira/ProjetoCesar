# Requisitos de Design:

## Tipografias: 

- titulos: h1, p, h2, h3, pode repetir os titulos por seções
- font family: Roboto , Garamound medium, Lazord;
- Font-size: h1: 28, p: 20;  h2: 12.3;

## Cores: 

- CorCabeçalho: #010001; -> Cabeçalho, Menu 

- CorPrimariaPagina: #FFFFFF; -> Página 1, Texto Menu, Pagina 2, Pagina 3, ,Pagina 5, 
Pagina 6, Pagina 7, Pagina 8, Pagina 9, TextoPagina10, Pagina11, Pagina12, Pagina13, Pagina 14, Pagina 15, Pagina 16, Pagina 17, CorBotao, Página 20;
 
- CorTextosPrimaria: #000000; -> Página 1,Pagina 9, Pagina11, Pagina 17, Página 19, Página 20;

- CorSecundariaPagina: #28282A; -> Pagina 10,

- CorSecundariaTextos: #FF0000; -> Pagina 10; Página 17,

- CorTerceariaPagina: #9F6861; -> Página 18, Página 20;

- CorQuartáriaPágina: #42231F; -> Página 19; 





// Array

let urls = [
    "./assets/img/perfumes masculinos/1.jpg",
    "./assets/img/fotos capa/promoção.png"
];


let imagemOriginal =  document.getElementById("image1");
let imagemOriginal2 = document.getElementById("image2");

//Função 

for(let i = 0; i < 23; i++){
    let  novaImagem1 =  imagemOriginal.cloneNode(true);
    let novaImagem2 = imagemOriginal2.clodeNode(true);
    novaImagem1.src = urls[0].replace(".jpg", "-" + (i + 1) + ".jpg");
    novaImagem2.src = urls[1].replace(".jpg", "-" + (i + 1) + ".jpg");
    document.body.appendChild(novaImagem1);
    document.body.appendChild(novaImagem2);
}

console.log("ola mundo");