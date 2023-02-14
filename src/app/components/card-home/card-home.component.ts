import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  @Input("container") container!: number
  @Input("image") image!: string
  @Input("title") title!: string
  @ViewChild("left") left!: ElementRef
  @ViewChild("right") right!: ElementRef
  dataAos: string = "fade-right"

  /**
  noOnInit(){
    switch(this.container){
      case 1:
        this.dataAos = "fade-right"
        break
      case 2:
        this.dataAos = "fade-left"
        break
      default:
        this.dataAos = "fade-right"
    }
  }
*/
  ngAfterViewInit(){
    switch(this.container){
      case 1:
        this.right.nativeElement.classList.add("gone")
        this.dataAos = "fade-right"
        break
      case 2:
        this.left.nativeElement.classList.add("gone")
        this.dataAos = "fade-left"
        break
      default:
        this.right.nativeElement.classList.add("gone")
        this.dataAos = "fade-right"
    }
  }
}
