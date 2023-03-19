import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-user',
  templateUrl: './nav-bar-user.component.html',
  styleUrls: ['./nav-bar-user.component.css']
})
export class NavBarUserComponent {
  navItems = [
    {
      container: ['nav-item'],
      a: {
        class: ['p-2','nav-link'],
        text: 'Publicaciones',
        router: ['/home','user', 'posts']
      }
    },
    {
      container: ['nav-item'],
      a: {
        class: ['p-2','nav-link'],
        text: 'Mis Publicaciones',
        router: ['/home','user', 'myPost']
      }
    },
    {
      container: ['nav-item'],
      a: {
        class: ['p-2','btn', 'btn-outline-danger'],
        text: 'Cerrar Sesión',
        router: ['/auth']
      }
    }
  ]
}
