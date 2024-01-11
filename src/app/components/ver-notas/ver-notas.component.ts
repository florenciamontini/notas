import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})

export class VerNotasComponent {

  materia = new FormControl('');
  mostrarDatosFormulario(): void {
    console.log(this.materia.value);
  }
}

