import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargar-notas',
  templateUrl: './cargar-notas.component.html',
  styleUrls: ['./cargar-notas.component.css']
})

export class CargarNotasComponent {
  esNotaVacia: boolean = false; // Variable para rastrear si 'nota' está vacío

  constructor(private formbuilder: FormBuilder) { }
  
  formularioCargaNotas = this.formbuilder.group({
    materia: ['', Validators.required],
    alumno: ['', Validators.required],
    nota: ['', [Validators.required, Validators.min(1)]]
  });

  mostrarDatosFormulario(): void {
    console.log(this.formularioCargaNotas.value);
    // Verificar si 'nota' está vacío y actualizar la variable esNotaVacia
    const notaControl = this.formularioCargaNotas.get('nota') as FormControl;
    this.esNotaVacia = !notaControl.value && notaControl.value == 0; //le agregue una validacion para q tmp pueda ser igual a 0

  } 
    //aca adentro de la funcion tengo que evaluar si nota es vacía, y si esta vacia setear como verd o falso otra variable 
    //luego en html con ng if evaluar esa variable y mostrar la alerta segun corresponda
  }


  

