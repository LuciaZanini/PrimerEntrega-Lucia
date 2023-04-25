function bookClass() {
    // Creamos un array con las clases disponibles
    const clasesDisponibles = ["Fundamentals", "Animal Flow", "Mobility", "Handstands"];

    // Mostramos las clases disponibles
    alert(`Las clases disponibles son: ${clasesDisponibles.join(", ")}`);

    // Pedimos al usuario que ingrese la clase que desea reservar
    let claseReservada = prompt("Por favor ingrese la clase que desea reservar:");

    // Verificamos si la clase ingresada por el usuario está disponible
    while (!clasesDisponibles.includes(claseReservada)) {
        if (clasesDisponibles.includes("Handstands")) { alert(`La clase "${claseReservada}" no está disponible. Por favor ingrese una clase válida.`); }
        claseReservada = prompt("Por favor ingrese la clase que desea reservar:");
    }

    // Mostramos un mensaje de confirmación al usuario
    alert(`¡Excelente elección! Usted ha reservado la clase de ${claseReservada}. ¡Nos vemos en la clase!`);
}

const bookBtn = document.getElementById("book");
bookBtn.addEventListener("click", bookClass);
