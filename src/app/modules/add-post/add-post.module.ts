import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { ArticuloArbitrarioComponent } from './pages/articulo-arbitrario/articulo-arbitrario.component';
import { TesisComponent } from './pages/tesis/tesis.component';
import { ArticuloIndexadoComponent } from './pages/articulo-indexado/articulo-indexado.component';
import { PropiedadIntelectualComponent } from './pages/propiedad-intelectual/propiedad-intelectual.component';
import { CapituloDeLibroComponent } from './pages/capitulo-de-libro/capitulo-de-libro.component';
import { LibroComponent } from './pages/libro/libro.component';
import { EstanciaComponent } from './pages/estancia/estancia.component';
import { MaterialDidacticoComponent } from './pages/material-didactico/material-didactico.component';
import { FileUploadPageComponent } from './pages/file-upload-page/file-upload-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticuloArbitrarioComponent,
    TesisComponent,
    ArticuloIndexadoComponent,
    PropiedadIntelectualComponent,
    CapituloDeLibroComponent,
    LibroComponent,
    EstanciaComponent,
    MaterialDidacticoComponent,
    FileUploadPageComponent
  ],
  imports: [
    CommonModule,
    AddPostRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddPostModule { }
