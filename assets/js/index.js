const inputCant = document.querySelector('#inputCant');
const inputColor = document.querySelector('#inputColor');
const btnCalcular = document.querySelector('#btnCalcular');
const cant = document.querySelector('#cant');

const totalPrice = document.querySelector('#totalPrice');

btnCalcular.addEventListener('click', () =>{

    const cantPc = "Cantidad: " + inputCant.value;
    cant.textContent = cantPc;

    const color = inputColor.value;
    circle.style.backgroundColor = inputColor.value;



    const price = 900000 * inputCant.value;
    totalPrice.textContent = "Total: " +"$"+ price;

});