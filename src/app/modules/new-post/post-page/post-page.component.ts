import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
})
export class PostPageComponent {
  typeList = [
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/articuloArbitrario',
      text: 'Articulo Arbitrado',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/articuloIndexado',
      text: 'Articulo Indexado',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/propiedadIntelectual',
      text: 'Propiedad Intelectual',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/capituloDeLibro',
      text: 'Capitulo de Libro',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/libro',
      text: 'Libro',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/estancia',
      text: 'Estancia',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/materialDidactico',
      text: 'Material Didactico',
    },
    {
      container: [],
      class: ['dropdown-item'],
      router: '/posts/newPost/tesis',
      text: 'Tesis',
    },
  ];

  constructor(private router: Router){

  }

  prb(e:any){
    this.router.navigate([e.target.value]);
  }
}
