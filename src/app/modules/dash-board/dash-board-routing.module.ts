import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ViewPDFPageComponent } from './pages/view-pdfpage/view-pdfpage.component';

const routes: Routes = [
  {
    path: '',
    component: UserPageComponent
  },
  {
    path: 'posts',
    component: ProductsPageComponent
  },
  {
    path: 'view/:src',
    component: ViewPDFPageComponent
  },
  {
    path: 'myPost',
    component: PostsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
