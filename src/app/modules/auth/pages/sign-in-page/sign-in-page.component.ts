import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent {
  form = [
    {
      id: 'name',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'text',
        placeholder: 'Nombre',
      },
      label: {
        class: ['text-muted'],
        text: 'Nombre Completo',
      },
    },
    {
      id: 'controlNumber',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'text',
        placeholder: 'Número de Control',
      },
      label: {
        class: ['text-muted'],
        text: 'Número de Control',
      },
    },
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
      id: 'department',
      container_class: ['col-10', 'col-lg-6'],
      select: {
        class: ['form-select', 'text-muted'],
        option: [
          {
            class: [],
            text: 'Ingeniería en Sistemas Computacionales',
            value: 'ISC',
          },
          {
            class: [],
            text: 'Ingeniería Química',
            value: 'IQ',
          },
          {
            class: [],
            text: 'Ingeniería Industria',
            value: 'IIND',
          },
          {
            class: [],
            text: 'Ingeniería Electromecánica',
            value: 'IEME',
          },
          {
            class: [],
            text: 'Ingeniería Electrónica',
            value: 'IE',
          },
          {
            class: [],
            text: 'Ingeniería Mecatrónica',
            value: 'MECA',
          },
          {
            class: [],
            text: 'Licenciatura en Administración',
            value: 'LA',
          },
          {
            class: [],
            text: 'Ingeniería en Gestión Empresarial',
            value: 'IGE',
          },
          {
            class: [],
            text: 'Ingeniería en Logística',
            value: 'ILOG',
          },
        ],
      },
    },
    {
      id: 'academicDegree',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'number',
        placeholder: 'Grado Académico',
      },
      label: {
        class: ['text-muted'],
        text: 'Grado Académico',
      },
    },
    {
      id: 'phoneNumber',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'number',
        placeholder: 'Teléfono',
      },
      label: {
        class: ['text-muted'],
        text: 'Teléfono',
      },
    },
    {
      id: 'password',
      container_class: ['col-10', 'col-lg-6'],
      input: {
        class: ['form-control', 'text-center'],
        type: 'password',
        placeholder: 'Contraseña',
      },
      label: {
        class: ['text-muted'],
        text: 'Contraseña',
      },
    },
  ];
  formSignIn: FormGroup = new FormGroup({});

  /**Método que se ejecuta al iniciar el componente */
  ngOnInit(): void {
    this.formSignIn = new FormGroup({
      name: new FormControl('', []),
      controlNumber: new FormControl('', []),
      email: new FormControl('', []),
      department: new FormControl('', []),
      academicDegree: new FormControl('', []),
      phoneNumber: new FormControl('', []),
      password: new FormControl('', []),
    });
  }
  /**Método constructor */
  constructor(
    private _authService: AuthServiceService,
    private _router: Router
  ) {}
  /**Función que envia los datos para ingresar */
  async sendSignIn() {
    const {
      name,
      controlNumber,
      email,
      department,
      academicDegree,
      phoneNumber,
      password,
    } = this.formSignIn.value;
    const data = await this._authService.newUser(
      name,
      controlNumber,
      email,
      department,
      academicDegree,
      phoneNumber,
      password
    );
    if (data) {
      const { response } = data;
      if (response) {
        this.formSignIn.reset();
        this._router.navigate(['auth', 'LogIn']);
      }
    }
  }
}
