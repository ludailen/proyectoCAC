const ticket =200;
console.log(ticket);
let estudianteDesc = 80;
let traineeDesc = 50;
let juniorDesc = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let totalPagar = document.getElementById("totalPagar");

const precioTotal = (event) => {
    event.preventDefault();

    let cantidadValor = cantidad.value;
    let categoriaValor = categoria.value;
    let precio = cantidadValor * ticket;

    console.log("Cantidad: " + cantidadValor);
    console.log("Categoría: " + categoriaValor);
    console.log("precio inicial: " + precio);

    switch (categoriaValor) {
        case "Sin categoría":
            break;
        case "Estudiante":
            precio = precio - (estudianteDesc / 100 * precio);
            break;
        case "Trainee":
            precio = precio - (traineeDesc / 100 * precio);
            break;
        case "Junior":
            precio = precio - (juniorDesc / 100 * precio);
            break;
    }
    console.log("Precio calculado: " + precio);
    totalPagar.innerHTML = "Total a pagar: $" + precio;
}

resumen.addEventListener("click", precioTotal);

const resetTotalPagar = () => {
    totalPagar.innerHTML = "Total a pagar: $";
}

borrar.addEventListener("click", resetTotalPagar);