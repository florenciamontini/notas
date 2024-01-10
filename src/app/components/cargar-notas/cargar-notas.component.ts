import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargar-notas',
  templateUrl: './cargar-notas.component.html',
  styleUrls: ['./cargar-notas.component.css']
})
export class CargarNotasComponent {
  constructor(private formbuilder: FormBuilder) { }

  formularioCargaNotas = this.formbuilder.group({
    materia: ['', Validators.required],
    alumno: ['', Validators.required],
    nota: ['', [Validators.required, Validators.min(1)]]
  });

  mostrarDatosFormulario(): void {
    console.log(this.formularioCargaNotas.value);
  }

  
}
