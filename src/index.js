document.getElementById("encrypt").addEventListener("click",()=>{

let texto = document.getElementById("message").value;
let offset = document.getElementById("sos").value;
//let result = window.cipher.encode(offset, texto);

document.getElementById("solution").value = window.cipher.encode(offset, texto);
});

document.getElementById("decrypt").addEventListener("click",()=>{

let texto = document.getElementById("message").value;
let offset = document.getElementById("sos").value;
    /*let result = window.cipher.dencode(offset, texto);*/
    
document.getElementById("solution").value = window.cipher.decode(offset, texto);
});