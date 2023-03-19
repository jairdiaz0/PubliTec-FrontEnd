import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
   path: 'user',
   loadChildren:() => import('../dash-board/dash-board.module').then(m => m.DashBoardModule)
},
{
  path: '**',
  redirectTo: 'user'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
