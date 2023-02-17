import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @ViewChild("div") div!: ElementRef
  @ViewChild("form") form!: ElementRef

  height!: number
  width!: number

  styleObject(): Object {
    if (this.height && this.width){
        return {height: this.height, width: this.width}
    }
    return {}
  }

  ngOnInit(){
    this.height = window.innerHeight
    this.width = window.innerWidth
  }

  ngAfterViewInit(){
    const div: HTMLElement = document.getElementById('div')!
  }

  @HostListener ('window:resize', ['$event'])
  onWindowResize(){
    this.height = window.innerHeight
    this.width = window.innerWidth
  }
}
