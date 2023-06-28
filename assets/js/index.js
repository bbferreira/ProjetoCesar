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



// teste

document.addEventListener('DOMContentLoaded', function() {
  const selectProduto = document.getElementById('select-produto');
  const produtoImagem = document.getElementById('produto-imagem');
  const btnAdicionar = document.getElementById('btn-adicionar');
  const pedidoLista = document.getElementById('pedido-lista');
  const pedidoForm = document.getElementById('pedido-form');

  selectProduto.addEventListener('change', function() {
    const produtoSelecionado = selectProduto.value;
    const imagemUrl = `assets/img/perfumes masculinos/${produtoSelecionado}.jpg`;
    produtoImagem.style.backgroundImage = `url(${imagemUrl})`;
  });

  btnAdicionar.addEventListener('click', function() {
    const produtoSelecionado = selectProduto.value;
    const produtoNome = selectProduto.options[selectProduto.selectedIndex].text;
    const quantidade = document.getElementById('quantidade').value;

    if (produtoSelecionado && quantidade > 0)
    {
      // Criar o elemento de item do pedido
      const itemPedido = document.createElement('li');
      itemPedido.innerHTML = `
        <span>${produtoNome}</span>
        <span>Quantidade: ${quantidade}</span>
        <button class="btn-remover">Remover</button>
      `;

      // Adicionar evento de remoção ao botão
      const btnRemover = itemPedido.querySelector('.btn-remover');
      btnRemover.addEventListener('click', function() {
        itemPedido.remove();
      });

      // Adicionar item do pedido à lista
      pedidoLista.appendChild(itemPedido);

      // Exibir o container do pedido
      document.getElementById('pedido-container').style.display = 'block';
    }
  });

  pedidoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;

    // Aqui você pode enviar os dados do pedido para o servidor ou realizar qualquer ação necessária com os dados.

    // Limpar o formulário após o envio
    pedidoForm.reset();
    pedidoLista.innerHTML = '';
    produtoImagem.style.backgroundImage = 'none';
    document.getElementById('pedido-container').style.display = 'none';
  });
});