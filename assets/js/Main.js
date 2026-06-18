function validateForm() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Llene todos los campos");
            return false;
        }
    }
    return true;
}
function Registrar(){
    let val = validateForm();
    if(val===true){
        alert("Cliente registrado");
    }     
}
function resizeBackground() {
    const bg = document.querySelector('body');
    bg.style.height = window.innerHeight + 'px';
}
window.addEventListener('resize', resizeBackground);
//resizeBackground();

const messagebox = document.querySelector('.messagebox');
const messageboxClose = document.querySelector('.messagebox-close');
const messageboxOk = document.querySelector('.messagebox-ok');
const messageboxCancel = document.querySelector('.messagebox-cancel');
 function showMessagebox() {
    messagebox.style.display = 'flex';
}
function hideMessagebox() {
    messagebox.style.display = 'none';
}
// messageboxClose.addEventListener('click', hideMessagebox);
//messageboxOk.addEventListener('click', hideMessagebox);
//messageboxCancel.addEventListener('click', hideMessagebox);
const btnRegistro = document.getElementById('btnRegistro');
const btnIniciar = document.getElementById('btnIniciar');


btnRegistro.addEventListener('click', () => {
    let formLogin = document.getElementById('formLogin');
    let formRegistro = document.getElementById('formRegistro');
    let cajaRegistro = document.getElementsByClassName('cajaRegistro');
    let cajaLogin = document.getElementsByClassName('cajaLogin');

    formLogin.style.display = 'none';
    cajaLogin[0].style.display = 'block';
    formRegistro.style.display = 'block';
    cajaRegistro[0].style.display = 'none';
});

btnIniciar.addEventListener('click', () => {
    let formLogin = document.getElementById('formLogin');
    let formRegistro = document.getElementById('formRegistro');
    let cajaRegistro = document.getElementsByClassName('cajaRegistro');
    let cajaLogin = document.getElementsByClassName('cajaLogin');

    formLogin.style.display = 'block';
    cajaLogin[0].style.display = 'none';
    formRegistro.style.display = 'none';
    cajaRegistro[0].style.display = 'block';
});
