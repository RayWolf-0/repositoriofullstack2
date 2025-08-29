let usuario = document.getElementById("usuario")
let contrasena = document.getElementById("contrasena")
let btnlogin = document.getElementById("botonlogin")

const user = "admin"
const pass = "123456"

btnlogin.addEventListener("click", () =>{
    if(usuario.value == user && contrasena.value == pass){
        window.location.href = "index.html";
    }else{
        const modal = new bootstrap.Modal(document.getElementById("loginerror"))
        modal.show();
    }
})