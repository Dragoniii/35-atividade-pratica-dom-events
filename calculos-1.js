const valorBase = document.getElementById("valor_base");
const ajudaComTransporte = document.getElementById("valor_transporte");
const ajudaAlimentacao = document.getElementById("valor_alimentacao");
const receitaTotal = document.getElementById("valor_receita");
const descontoDeAutomovel = document.getElementById("valor_automovel");
const faltas = document.getElementById("faltas");
const descontosTotal = document.getElementById("valor_descontos");
const total = document.getElementById("valor_total");
const calcular = document.getElementById("btn_calcular");

calcular.addEventListener("click", conta);

function conta() {
    let valorBase1 = valorBase.value;
    let ajudaTransporte1 = ajudaComTransporte.value;
    let ajudaAlimentacao1 = ajudaAlimentacao.value;
    receitaTotal.value = (0 - valorBase1 - ajudaTransporte1 - ajudaAlimentacao1) * -1;

    let descontoAutomovel1 = descontoDeAutomovel.value;
    let descontoFaltas1 = faltas.value;
    descontosTotal.value = (0 - descontoAutomovel1 - descontoFaltas1) * -1;

    total.value = receitaTotal.value - descontosTotal.value;
}