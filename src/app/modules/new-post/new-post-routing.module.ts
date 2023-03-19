import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'newPost',
    loadChildren: () =>
      import('../add-post/add-post.module').then((m) => m.AddPostModule),
  },
  {
    path: '**',
    redirectTo: 'newPost'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPostRoutingModule {}
