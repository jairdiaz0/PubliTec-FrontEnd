import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPostRoutingModule } from './new-post-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostPageComponent } from './post-page/post-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    NewPostRoutingModule,
    SharedModule
  ]
})
export class NewPostModule { }
