import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cargar-notas',
  templateUrl: './cargar-notas.component.html',
  styleUrls: ['./cargar-notas.component.css']
})
export class CargarNotasComponent {
  nota = new FormControl('');

  mostrarNota(){
    alert(this.nota.value);
    console.log(this.nota.value);
  }
}
