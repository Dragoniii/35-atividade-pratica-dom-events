/* Desenvolva aqui a rotina */
const valorBase = document.querySelector("#valor_base");
const ajudaTransporte = document.querySelector("#valor_transporte");
const ajudaAlimentacao = document.querySelector("#valor_alimentacao");
const receitaTotal = document.querySelector("#valor_receita");
const descontoAutomovel = document.querySelector("#valor_automovel");
const descontoFaltas = document.querySelector("#faltas");
const descontosTotal = document.querySelector("#valor_descontos");
const total = document.querySelector("#valor_total");
const botao = document.querySelector("#btn_calcular");
const inputs = document.querySelectorAll('input[type="number"]');

botao.addEventListener("click", calcular);
inputs.forEach(input => input.addEventListener("input", calcular));

function calcular() {
    let valorBase1 = valorBase.value;
    let ajudaTransporte1 = ajudaTransporte.value;
    let ajudaAlimentacao1 = ajudaAlimentacao.value;
    receitaTotal.value = (0 - valorBase1 - ajudaTransporte1 - ajudaAlimentacao1) * -1;

    let descontoAutomovel1 = descontoAutomovel.value;
    let descontoFaltas1 = descontoFaltas.value;
    descontosTotal.value = (0 - descontoAutomovel1 - descontoFaltas1) * -1;

    total.value = receitaTotal.value - descontosTotal.value;
}