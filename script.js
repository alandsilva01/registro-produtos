const registroForm = document.getElementById('registroForm');
const registroTable = document.getElementById('registroBody');
const vendaTotal = document.getElementById('vendaTotal');

let registros = [];
let totalVendas = 0;

function registrarMercadoria(event) {
  event.preventDefault();

  const codigoInput = document.getElementById('codigo');
  const mercadoriaInput = document.getElementById('mercadoria');
  const precoInput = document.getElementById('preco');

  const codigo = codigoInput.value;
  const mercadoria = mercadoriaInput.value;
  const preco = parseFloat(precoInput.value);
  const estoque = 0; // Inicialmente o estoque é zero

  const mercadoriaObj = {
    codigo,
    mercadoria,
    preco,
    estoque
  };

  registros.push(mercadoriaObj);

  codigoInput.value = '';
  mercadoriaInput.value = '';
  precoInput.value = '';

  exibirRegistros();
}

function venderMercadoria(codigo) {
  const mercadoria = registros.find(item => item.codigo === codigo);

  if (mercadoria && mercadoria.estoque > 0) {
    mercadoria.estoque -= 1;
    totalVendas += mercadoria.preco;

    exibirRegistros();
    exibirTotalVendas();
  }
}

function exibirRegistros() {
  registroTable.innerHTML = '';

  registros.forEach(mercadoria => {
    const row = document.createElement('tr');
    const codigoCell = document.createElement('td');
    const mercadoriaCell = document.createElement('td');
    const precoCell = document.createElement('td');
    const estoqueCell = document.createElement('td');
    const venderCell = document.createElement('td');

    codigoCell.textContent = mercadoria.codigo;
    mercadoriaCell.textContent = mercadoria.mercadoria;
    precoCell.textContent = mercadoria.preco.toString();
    estoqueCell.textContent = mercadoria.estoque.toString();

    const venderButton = document.createElement('button');
    venderButton.textContent = 'Vender';
    venderButton.addEventListener('click', () => venderMercadoria(mercadoria.codigo));

    venderCell.appendChild(venderButton);

    row.appendChild(codigoCell);
    row.appendChild(mercadoriaCell);
    row.appendChild(precoCell);
    row.appendChild(estoqueCell);
    row.appendChild(venderCell);

    registroTable.appendChild(row);
  });
}

function exibirTotalVendas() {
  vendaTotal.textContent = totalVendas.toFixed(2);
}

registroForm.addEventListener('submit', registrarMercadoria);
exibirTotalVendas();
