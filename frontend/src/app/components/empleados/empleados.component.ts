import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  standalone: false
})
export class EmpleadosComponent {

  constructor(public empleadoService: EmpleadoService) { }

  agregarEmpleado(form: NgForm) {
    this.empleadoService.postEmpleado(form.value)
      .subscribe({
        next: () => {
          this.resetForm(form);
          M.toast({ html: 'Guardado satisfactoriamente' });
        },
        error: () => {
          M.toast({ html: 'Error: revisa que todos los campos estén llenos' });
        }
      });
  }

  resetForm(form: NgForm) {
    form.reset();
    this.empleadoService.selectedEmpleado = new Empleado();
  }
}