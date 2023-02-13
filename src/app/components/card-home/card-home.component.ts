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

  ngAfterViewInit(){
    switch(this.container){
      case 1:
        this.right.nativeElement.classList.add("gone")
        break
      case 2:
        this.left.nativeElement.classList.add("gone")
        break
      default:
        this.right.nativeElement.classList.add("gone")
    }
  }
}
