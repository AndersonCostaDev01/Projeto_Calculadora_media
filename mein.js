const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="Emoji selebrando" />'
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="Emoji triste" />'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanAReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota nota minima'));
let linhas = '';
let atividades = [];
let notas = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if(atividades.includes(inputNotaAtividade.value)){
        alert(`A atividade ${inputNomeAtividade} ja foi inserida`);
    }else{
        let linha = '<tr>';
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;
        linhas += linha;
        inputNomeAtividade.value = '';
        inputNotaAtividade.value = '';
    }
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; 
}
function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado'). innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanAReprovado;
}
function calculaMediaFinal (){
    let  somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

