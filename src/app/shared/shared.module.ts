import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { NavBarUserComponent } from './components/nav-bar-user/nav-bar-user.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    AuthNavComponent,
    NavBarUserComponent,
    FilterBarComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    NavBarComponent,
    AuthNavComponent,
    NavBarUserComponent,
    FilterBarComponent
  ]
})
export class SharedModule { }
