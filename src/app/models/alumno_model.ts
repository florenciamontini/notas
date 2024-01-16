export class Alumno {
    id: number;
    nombre: string;
    apellido: string;
    notas: Nota[];

    constructor(id: number, nombre: string, apellido: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.notas = [];
    }

    agregarNota(nota: Nota): void {
        this.notas.push(nota);
    }
}
export class Nota {
    materia: Materia;
    calificacion: number;

    constructor(materia: Materia, calificacion: number) {
        this.materia = materia;
        this.calificacion = calificacion;
    }
}
export class Materia {
    id: number;
    nombre: string;

    constructor(id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
    }
}