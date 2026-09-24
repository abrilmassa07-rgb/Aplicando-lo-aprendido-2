import { preguntar, cerrar } from "./io";
import {
    mostrarTareas,
    buscarTarea,
    agregarTarea
} from "./operaciones";

export async function iniciarMenu(): Promise<void> {
    let opcion: string;

    do {
        console.log("\n===== MENÚ PRINCIPAL =====");
        console.log("1. Ver tareas");
        console.log("2. Buscar");
        console.log("3. Agregar");
        console.log("4. Salir");

        opcion = (await preguntar("Seleccione una opción: ")).trim();

        switch (opcion) {
            case "1":
                await mostrarTareas();
                break;

            case "2":
                await buscarTarea();
                break;

            case "3":
                await agregarTarea();
                break;

            case "4":
                cerrar();
                console.log("Programa finalizado.");
                break;

            default:
                console.log("Opción inválida. Ingrese 1, 2, 3 o 4.");
        }

    } while (opcion !== "4");
}