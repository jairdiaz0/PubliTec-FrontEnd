import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookieSessionGuard } from './core/guards/cookie-session.guard';
import { SessionGuard } from './core/guards/session.guard';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { PostPageComponent } from './modules/new-post/post-page/post-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [CookieSessionGuard],
  },
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [SessionGuard],
  },
  {
    path: 'posts',
    component: PostPageComponent,
    loadChildren: () =>
      import('./modules/new-post/new-post.module').then((m) => m.NewPostModule),
    canActivate: [SessionGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
