import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  @ViewChild('navbar') nav!: ElementRef
  @ViewChild('icon') icon!: ElementRef
  @ViewChild('mySidenav') sideNav!: ElementRef
  change = false

  ngAfterViewInit(){

    var sticky = this.nav.nativeElement.offsetTop

    window.onscroll = () => {
      if (window.pageXOffset >= sticky){
        this.nav.nativeElement.classList.add('sticky')
      } else {
        this.nav.nativeElement.classList.remove('sticky')
      }
    }

    this.icon.nativeElement.addEventListener('click', () => {
      this.icon.nativeElement.classList.toggle('open')
      this.change = !this.change
      this.openNav()
    })

    //! Al hacer click en cualquier area que no sea el header, toggle o el navbar, esconde el menu
    //Controlamos todos desde aca, porque al hacerlo desde otro lado, no lo toma
    document.onclick = (e) => {
      const element = e.target as HTMLElement
      if (element.id !== 'mySidenav' && element.id !== 'icon' && element.id !== 'navbar') {
        if (this.change){
          this.icon.nativeElement.classList.toggle('open')
          this.sideNav.nativeElement.style.width = "0px"
          this.change = !this.change
        }
      }
      if (element.id == 'div') {
        const div: HTMLElement = document.getElementById('div')!
        div.classList.remove('show')
        div.classList.add('hide')
      }
    }

  }

  openNav() {
    if(this.change){
      this.sideNav.nativeElement.style.width = "250px"
    }
    else{
      this.sideNav.nativeElement.style.width = "0px"
    }
  }
}
