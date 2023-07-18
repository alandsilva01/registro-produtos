// Obter referências aos elementos do DOM
const registroForm = document.getElementById('registroForm');
const registroTable = document.getElementById('registroBody');

// Array para armazenar os registros de mercadorias
let registros = [];

// Função para registrar a mercadoria
function registrarMercadoria(event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const codigo = document.getElementById('codigo').value;
  const mercadoria = document.getElementById('mercadoria').value;
  const preco = document.getElementById('preco').value;

  // Criar um objeto para representar a mercadoria
  const mercadoriaObj = {
    codigo,
    mercadoria,
    preco
  };

  // Adicionar a mercadoria ao array de registros
  registros.push(mercadoriaObj);

  // Limpar os campos do formulário
  document.getElementById('codigo').value = '';
  document.getElementById('mercadoria').value = '';
  document.getElementById('preco').value = '';

  // Atualizar a exibição dos registros
  exibirRegistros();
}

// Função para exibir os registros na tabela
function exibirRegistros() {
  // Limpar a tabela
  registroTable.innerHTML = '';

  // Percorrer os registros e criar as linhas da tabela
  registros.forEach(mercadoria => {
    const row = document.createElement('tr');
    const codigoCell = document.createElement('td');
    const mercadoriaCell = document.createElement('td');
    const precoCell = document.createElement('td');

    codigoCell.textContent = mercadoria.codigo;
    mercadoriaCell.textContent = mercadoria.mercadoria;
    precoCell.textContent = mercadoria.preco;

    row.appendChild(codigoCell);
    row.appendChild(mercadoriaCell);
    row.appendChild(precoCell);

    registroTable.appendChild(row);
  });
}

// Adicionar um event listener para o evento submit do formulário
registroForm.addEventListener('submit', registrarMercadoria);
