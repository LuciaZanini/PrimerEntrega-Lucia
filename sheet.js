function bookClass() {
    const clasesDisponibles = ["Fundamentals", "Animal Flow", "Mobility", "Handstands"];

    alert(`Las clases disponibles son: ${clasesDisponibles.join(", ")}`);

    let claseReservada = prompt("Por favor ingrese la clase que desea reservar:");

    while (!clasesDisponibles.includes(claseReservada)) {
        if (clasesDisponibles.includes("Handstands")) { alert(`La clase "${claseReservada}" no está disponible. Por favor ingrese una clase válida.`); }
        claseReservada = prompt("Por favor ingrese la clase que desea reservar:");
    }

    alert(`¡Excelente elección! Usted ha reservado la clase de ${claseReservada}. ¡Nos vemos en la clase!`);
}

const bookBtn = document.getElementById("book");
bookBtn.addEventListener("click", bookClass);
