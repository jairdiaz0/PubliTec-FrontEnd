import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { ViewPDFPageComponent } from './pages/view-pdfpage/view-pdfpage.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserPageComponent,
    ProductsPageComponent,
    PostsPageComponent,
    ViewPDFPageComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    SharedModule
  ]
})
export class DashBoardModule { }
