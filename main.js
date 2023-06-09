const form = document.getElementById('form-lista');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const inputNomePessoa = document.getElementById('form-nome');
    const inputTelPessoa = document.getElementById('form-tel');

    let linha = '<tr>';
    linha += `<td>${inputNomePessoa.value}</td>`;
    linha += `<td>${inputTelPessoa.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNomePessoa.value = '';
    inputTelPessoa.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
