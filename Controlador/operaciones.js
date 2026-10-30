import { habitaciones } from "../modelo/datos.js";

export function realizarCheckIn(numero) {

    const habitacion = habitaciones.find(
        habitacion => habitacion.numero === numero
    );

    if (!habitacion) {
        console.log(`Error: la habitación ${numero} no existe.`);
        return;
    }

    if (habitacion.estado === "ocupada") {
        console.log(
            `Error: la habitación ${numero} ya está ocupada.`
        );
        return;
    }

    habitacion.estado = "ocupada";

    console.log(
        `Check-in exitoso en la habitación ${numero}.`
    );
}

