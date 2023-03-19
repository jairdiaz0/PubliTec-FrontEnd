import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  headers = [
    'Id',
    'Título',
    'Propósito',
    'Fecha de Pulicación',
    'Tipo de Publicación',
    'Archivo'
  ]

  products:any = []
  constructor(private _userService: UserService) {}
  async ngOnInit() {
    const { response } = await this._userService.getAllPost();
    console.log(response);
    this.products = response.map((element: any) => {
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
            route: `${environment.url}/files/${element.url}`,
          },
        },
      };
    });
  }
}
