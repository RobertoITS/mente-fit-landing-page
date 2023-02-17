import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopButtonComponent } from './scroll-to-top-button/scroll-to-top-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ScrollToTopButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ScrollToTopButtonComponent
  ]
})
export class SharedModule { }
