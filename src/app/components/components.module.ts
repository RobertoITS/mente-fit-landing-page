import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardHomeComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CardHomeComponent,
    RegistrationComponent
  ]
})
export class ComponentsModule { }
