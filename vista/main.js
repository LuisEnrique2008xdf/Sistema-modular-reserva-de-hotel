import { habitaciones } from "../modelo/datos.js";
import { realizarCheckIn, calcularIngresos} from "../Controlador/operaciones.js";

console.log(" ESTADO INICIAL DEL HOTEL ");
console.table(habitaciones);

console.log("\n PRUEBA DE CHECK-IN RECHAZADO ");
realizarCheckIn(23);

console.log("\n PRUEBA DE CHECK-IN EXITOSO ");
realizarCheckIn(24);

console.log("\n ESTADO ACTUALIZADO DEL HOTEL ");
console.table(habitaciones);

console.log("\n INGRESOS NOCTURNOS ");
const total = calcularIngresos();

console.log(
    `Ingresos proyectados: $${total.toLocaleString("es-CO")}`
);
