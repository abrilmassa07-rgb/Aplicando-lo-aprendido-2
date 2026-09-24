export type EstadoTarea = "Pendiente" | "En curso" | "Terminada" | "Cancelada";
export type DificultadTarea = "⭐" | "⭐⭐" | "⭐⭐⭐";
export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    estado: EstadoTarea;
    fecha: Date;
    ultimaEdicion: Date;
    vencimiento: Date | null;
    dificultad: DificultadTarea;
}
export const listaDeTareas: Tarea[] = [];
export function crearTarea(
    titulo: string,
    descripcion: string,
    vencimiento: Date | null,
    dificultad: DificultadTarea = "⭐"
): Tarea {
    const ahora = new Date();
    return {
        id: listaDeTareas.length + 1,
        titulo: titulo.trim(),
        descripcion: descripcion,
        estado: "Pendiente",
        fecha: ahora,
        ultimaEdicion: ahora,
        vencimiento: vencimiento,
        dificultad: dificultad
    };
}
export function convertirFecha(fechaIngresada: string): Date | null | undefined {
    if (fechaIngresada.trim() === "") {
        return null;
    }

    const partes = fechaIngresada.split("/");
    if (partes.length !== 3) {
        return undefined;
    }

    const dia = Number(partes[0]);
    const mes = Number(partes[1]) - 1;
    const anio = Number(partes[2]);

    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return undefined;
    }

    const fecha = new Date(anio, mes, dia);

    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() !== mes ||
        fecha.getDate() !== dia
    ) {
        return undefined;
    }

    return fecha;
}
export function mostrarFecha(fecha: Date | null | undefined): string {
    if (!fecha) {
        return "Sin datos";
    }

    return new Date(fecha).toLocaleDateString();
}
export function validarTitulo(titulo: string): boolean {
    const lim = titulo.trim();
    return lim.length > 0 && titulo.length <= 100;
}

export function validarDescripcion(descripcion: string): boolean {
    return descripcion.length <= 500;
}

export function validarDificultad(dificultad: string): dificultad is DificultadTarea {
    return dificultad === "⭐" || dificultad === "⭐⭐" || dificultad === "⭐⭐⭐";
}

export function validarEstado(estado: string): estado is EstadoTarea {
    return (
        estado === "Pendiente" ||
        estado === "En curso" ||
        estado === "Terminada" ||
        estado === "Cancelada"
    );
}

export function validarFechaVencimiento(fechaStr: string): boolean {
    return convertirFecha(fechaStr) !== undefined;
}