import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css'],
})
export class LogInPageComponent {
  form = [
    {
      id: 'email',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'email',
        placeholder: 'Correo Electrónico',
      },
      label: {
        class: ['text-muted'],
        text: 'Correo Electrónico',
      },
      span: {
        class: ['input-group-text'],
        text: '@toluca.tecnm.mx',
      },
    },
    {
      id: 'password',
      container_class: ['col-10', 'col-lg-6', 'mt-4'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'password',
        placeholder: '********',
      },
      label: {
        class: ['text-muted'],
        text: 'Contraseña',
      },
    },
  ];
  formLogIn: FormGroup = new FormGroup({});

  alert = {
    default: {
      class: [''],
      text: '',
    },
    success: {
      class: ['alert', 'alert-success'],
      text: 'Inicio de Sesión Correcto',
    },
    fail: {
      class: ['alert', 'alert-danger'],
      text: 'Favor de revisar los datos',
    },
    error: {
      class: ['alert', 'alert-warning'],
      text: 'No hay conexión con el servidor',
    },
    wait: {
      class: ['alert', 'alert-dark'],
      text: 'En espera de respuesta del servidor',
    },
  };

  /**Método que se ejecuta al iniciar el componente */
  ngOnInit(): void {
    this.formLogIn = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl('', []),
    });
  }
  /**Método constructor */
  constructor(
    private _authService: AuthServiceService,
    private _router: Router
  ) {}
  /**Función que envia los datos para ingresar */
  async sendLogIn() {
    this.alert.default = this.alert.wait;
    const { email, password } = this.formLogIn.value;
    try {
      const { response } = await this._authService.validLogin(email, password);
      if (response) {
        this._router.navigate(['home']);
      }
    } catch (error: any) {
      console.log(error)
      const { status } = error;
      if (status == 401) {
        this.alert.default = this.alert.fail;
      }else if(status == 0){
        this.alert.default = this.alert.error;
      }
    }
  }
}
