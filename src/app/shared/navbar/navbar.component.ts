import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent {

  @ViewChild('navbar') nav!: ElementRef

  ngAfterViewInit(){
    var sticky = this.nav.nativeElement.offsetTop
    window.onscroll = () => {
      if (window.pageXOffset >= sticky){
        this.nav.nativeElement.classList.add('sticky')
      } else {
        this.nav.nativeElement.classList.remove('sticky')
      }
    }
  }

}
