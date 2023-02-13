import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardHomeComponent } from './card-home/card-home.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CardHomeComponent
  ]
})
export class ComponentsModule { }
