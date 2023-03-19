import { Component } from '@angular/core';
import { SessionGuard } from 'src/app/core/guards/session.guard';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  user = this._sessionGuard.user;

  userData = [
    {
      id: 'name',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Nombre Completo',
      },
      text: {
        title: this.user.name,
        class: [],
      },
    },
    {
      id: 'controlNumber',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Número de Control',
      },
      text: {
        title: this.user.controlNumber,
        class: [],
      },
    },
    {
      id: 'email',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Correo Electrónico',
      },
      text: {
        title: this.user.email,
        class: [],
      },
    },
    {
      id: 'department',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Departamento',
      },
      text: {
        title: this.user.department,
        class: [],
      },
    },
    {
      id: 'academicDegree',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Grado Académico',
      },
      text: {
        title: this.user.academicDegree,
        class: [],
      },
    },
    {
      id: 'phoneNumber',
      container_class: ['col-10', 'col-lg-6'],
      label: {
        class: ['text-muted'],
        text: 'Teléfono',
      },
      text: {
        title: this.user.phoneNumber,
        class: [],
      },
    },
  ];

  buttons = [
    {
      id: 'post',
      button: {
        class: ['col-10', 'btn', 'btn-outline-success', 'mb-3', 'mt-3'],
        text: 'Publicaciones',
        router: ['posts'],
      },
    },
    {
      id: 'myPost',
      button: {
        class: ['col-10', 'btn', 'btn-outline-success', 'mb-3'],
        text: 'Mis Publicaciones',
        router: ['myPost'],
      },
    },
    {
      id: 'logOut',
      button: {
        class: ['col-10', 'btn', 'btn-outline-danger', 'mb-3'],
        text: 'Cerrar Sesión',
        router: ['/'],
      },
    },
  ];

  constructor(private _sessionGuard: SessionGuard) {
  }
}
