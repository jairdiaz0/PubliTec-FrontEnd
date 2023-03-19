import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent {
  headers = [
    'Id',
    'Título',
    'Propósito',
    'Fecha de Pulicación',
    'Tipo de Publicación',
    'Archivo',
  ];

  posts:any = [];

  constructor(private _userService: UserService) {}
  async ngOnInit() {
    const { response } = await this._userService.getUserPost();
    this.posts = response.map((element: any) => {
      return {
        id: element.id,
        title: element.title,
        description: element.description,
        date: element.date,
        type: element.type,
        file: {
          button: {
            class: ['col-12', 'btn', 'btn-outline-dark'],
            text: 'Ver',
          },
          routeFile: {
            route: `http://localhost:3000/files/${element.url}`,
          },
        },
      };
    });
  }
}
