import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mente-fit-landing-page';
  ngOnInit() {
    AOS.init({ once:true });
    window.addEventListener('load', AOS.refresh);
  }
}
