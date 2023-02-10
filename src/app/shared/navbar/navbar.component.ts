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

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body
openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
} */
