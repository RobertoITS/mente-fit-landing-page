import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  registerForm!: HTMLElement
  ngAfterViewInit(){
    this.registerForm = document.getElementById('div')!
    console.log(this.registerForm);
  }

  show(){
    this.registerForm.classList.remove('hide')
    this.registerForm.classList.add('show')
    console.log(this.registerForm);
  }
}
