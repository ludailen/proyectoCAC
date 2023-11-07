const ticket =200;

let estudianteDesc = 80;
let traineeDesc = 50;
let juniorDesc = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

let precio = (cantidad.value) * ticket;

const precioTotal = () => {
switch (categoria.value) {
    case "1":
        precio = precio - (precio*(estudianteDesc/100));
        break;
    case "2":
        precio = precio - (precio*(traineeDesc/100));
        break;
    case "3":
        precio = precio - (precio*(traineeDesc/100));
        break;
}

total.innerHTML = precio;
}
btnResumen.addEventListener('click', precioTotal);