import { Component } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cargar-notas',
  templateUrl: './cargar-notas.component.html',
  styleUrls: ['./cargar-notas.component.css']
})

export class CargarNotasComponent {
  esNotaVacia: boolean = false; // Variable para rastrear si 'nota' está vacío
  esNotaNegativa: boolean = false;
  materias = ['literatura', 'matematica','algoritmos'];
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

    // this.esNotaVacia = !notaControl.value && notaControl.value == 0; //le agregue una validacion para q tmp pueda ser igual a 0
    if (notaControl.value == null || notaControl.value == '') {
      this.esNotaVacia = true;
    } else {
      this.esNotaVacia = false;
    }
    //puedo anidarlo dentro del else anterior
    if (notaControl.value < 0) {
      this.esNotaNegativa = true;    
    } else {
      this.esNotaNegativa = false;
    }
    
    
  } 
    //aca adentro de la funcion tengo que evaluar si nota es vacía, y si esta vacia setear como verd o falso otra variable 
    //luego en html con ng if evaluar esa variable y mostrar la alerta segun corresponda
  }


  

