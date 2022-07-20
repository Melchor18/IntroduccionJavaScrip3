/*console.log("el javascript carga");
function duplicar(n){
    return n * 2;

}

function map (operacion, lista){
    let resultado = [];
    for (let i = 0; i < lista.lenght; i++){
        resultado.push
    }

}


console.log(palabras.map(mayus))
console.log(palabras)
console.log

let menu = ["home", "sobre nosotros", "carrito"];
function meterEnLi(elemento) {
    return `<li> ${elemento} </li>`
}
console.log(menu);
console.log(menu.map(meterEnLi));
*/

function meterEnDiv(elemento)
{
    return `<div> ${elemento}</div>`
}

let abecedario = "abcdefghijklmnñopqrstuvwxyz";
let arrAbecedario = abecedario.split("");

let divAbecedario = arrAbecedario.map(meterEnDiv);
console.log(divAbecedario.join("\n"))

console.log(
    abecedario
    .split("")
    .map(function(x){
        return `<div> ${x}</div>`
    })
    .join("\n")
)


console.log(
    l.map(x => x * 5)
)
console.log(
    abecedario.split("")
    .map(x => `<div>${x}</div>`)
    .join("")

)
setTimeout( () =>)
