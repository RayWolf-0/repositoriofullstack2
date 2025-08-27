let variable = "esto es una variable";
const constante = "esto es una constante";
variable = "cambie la variable";
//constante = "cambie la constante";

console.log(variable);
console.log(constante);

let validar = 11
if (validar < 10){
    console.log("la variable es menor que 10");
} else if (validar > 10){
    console.log("la variable es mayor a 10");
}else{
    console.log("la variable es igual a 10");
}

for(let i= 1; i<= 5; i++ ){
    console.log("la variable i es: " + i);
}

let dia = 2;
switch(dia){
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    default:
        console-log("entonces es otro dia");
        break;
}

let contador = 1;
while (contador<= 5){
    console.log("la variable contador es: " + contador);
    contador++;
}

let numero = 1;
do{
    console.log("la variable contador es: " + numero);
    numero++;
}while(numero <= 5)

function saludar(nombre){
    return "hola"+ nombre
}
console.log(saludar("Lya"));

//boton suma:
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btnsuma = document.getElementById("btnsuma");
let resultadosuma = document.getElementById("resultadosuma");

function suma(a,b){
    return a+b;
}

btnsuma.addEventListener("click", () => {
    resultadosuma.innerText = suma(Number(num1.value), Number(num2.value));
})

//cambiar textos
let titulo = document.getElementById("titulo");
let botontxt = document.getElementById("btncambiartxt");
let entrada = document.getElementById("entrada");
let salida = document.getElementById("salida");

botontxt.addEventListener("click", () =>{
    titulo.innerText = "texto cambiado con js"
})

entrada.addEventListener("input", () =>{
    salida.innerText = "escribiste: " + entrada.value;
})

let cambiarcolor = document.getElementById("eventomouse");

cambiarcolor.addEventListener("mouseenter", () =>{
    cambiarcolor.style.background = "lightblue";
    cambiarcolor.innerText = "entraste al div"
})

cambiarcolor.addEventListener("mouseout", () =>{
    cambiarcolor.style.background = "lightgreen";
    cambiarcolor.innerText = "saliste del div"
})
