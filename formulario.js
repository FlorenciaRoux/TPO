const nombre = document.getElementById("name")
const email = document.getElementById("email")
const phonenumber = document.getElementById("phonenumber")
const textarea = document.getElementById("textarea")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false 
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <4){
        warnings +='El nombre no es valido <br>'
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings +='El email no es valido <br>'
        entrar = true
    }
    if(phonenumber.value.length < 10){
        warnings +='El teléfono no es valido <br>'
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = "Enviado"
    }
})