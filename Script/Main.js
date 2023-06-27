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
resizeBackground();

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
 messageboxClose.addEventListener('click', hideMessagebox);
messageboxOk.addEventListener('click', hideMessagebox);
messageboxCancel.addEventListener('click', hideMessagebox);