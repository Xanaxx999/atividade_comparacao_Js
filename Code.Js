document.querySelector("form").addEventListener('submit', function(Não_reset){
    Não_reset.preventDefault();

let resultado = document.getElementById("resultado");
resultado.style.display = "block"

let A = Number(document.getElementById("Numero_A").value);
let B = Number(document.getElementById("Numero_B").value);

if (A > B) {
    resultado.value = `O número ${A} é maior que ${B}.`;
} 

else if (A < B) {
    resultado.value = `O número ${A} é menor que ${B}.`;
} 

else {
    resultado.value = `Os dois números são iguais.`;
}

});
