let tamanhoFonte = 16;
const corpo = document.body;

function alterarFonte(valor) {
  tamanhoFonte += valor;
  if (tamanhoFonte < 12) tamanhoFonte = 12;
  if (tamanhoFonte > 24) tamanhoFonte = 24;
  corpo.style.fontSize = `${tamanhoFonte}px`;
}

function alternarContraste() {
  corpo.classList.toggle("alto-contraste");
}
