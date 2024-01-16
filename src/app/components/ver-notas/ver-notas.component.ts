import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Alumno, Materia, Nota } from 'src/app/models/alumno_model';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css'],
})
export class VerNotasComponent {
  alumnos: Alumno[] = [];
  materia = new FormControl('');

  ngOnInit() {
    const matematicas = new Materia(1, 'Matemáticas');
    const literatura = new Materia(2, 'Literatura');
    const ciencias = new Materia(3, 'Ciencias');
    const alumno1 = new Alumno(1, 'Juan', 'Perez');
    alumno1.agregarNota(new Nota(matematicas, 8));
    alumno1.agregarNota(new Nota(literatura, 7));

    const alumno2 = new Alumno(2, 'Ana', 'Gomez');
    alumno2.agregarNota(new Nota(matematicas, 9));
    alumno2.agregarNota(new Nota(ciencias, 10));

    const alumno3 = new Alumno(3, 'Luis', 'Rodríguez');
    alumno3.agregarNota(new Nota(literatura, 6));
    alumno3.agregarNota(new Nota(ciencias, 8));

    this.alumnos.push(alumno1);
    this.alumnos.push(alumno2);
    this.alumnos.push(alumno3);

console.log(this.alumnos[0]);
  }

  mostrarDatosFormulario(): void {
    console.log(this.materia.value);
  }
}
