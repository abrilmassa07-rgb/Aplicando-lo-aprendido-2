import * as readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

export function preguntar(pregunta: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(pregunta, (respuesta: string) => {
            resolve(respuesta);
        });
    });
}

export function cerrar(): void {
    rl.close();
}