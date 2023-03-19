import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloArbitrarioComponent } from './pages/articulo-arbitrario/articulo-arbitrario.component';
import { ArticuloIndexadoComponent } from './pages/articulo-indexado/articulo-indexado.component';
import { CapituloDeLibroComponent } from './pages/capitulo-de-libro/capitulo-de-libro.component';
import { EstanciaComponent } from './pages/estancia/estancia.component';
import { FileUploadPageComponent } from './pages/file-upload-page/file-upload-page.component';
import { LibroComponent } from './pages/libro/libro.component';
import { MaterialDidacticoComponent } from './pages/material-didactico/material-didactico.component';
import { PropiedadIntelectualComponent } from './pages/propiedad-intelectual/propiedad-intelectual.component';
import { TesisComponent } from './pages/tesis/tesis.component';

const routes: Routes = [
  {
    path: 'articuloArbitrario',
    component: ArticuloArbitrarioComponent
  },
  {
    path: 'articuloIndexado',
    component: ArticuloIndexadoComponent
  },
  {
    path: 'capituloDeLibro',
    component: CapituloDeLibroComponent
  },
  {
    path: 'estancia',
    component: EstanciaComponent
  },
  {
    path: 'libro',
    component: LibroComponent
  },
  {
    path: 'materialDidactico',
    component: MaterialDidacticoComponent
  },
  {
    path: 'propiedadIntelectual',
    component: PropiedadIntelectualComponent
  },
  {
    path: 'tesis',
    component: TesisComponent
  },
  {
    path: 'fileUpload',
    component: FileUploadPageComponent
  },
  {
    path: '**',
    redirectTo: 'fileUpload'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPostRoutingModule { }
