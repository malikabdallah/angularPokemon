import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  //reference element du dom sur lequel on applique la directive
  constructor(private el:ElementRef) {
    this.setHeight(200);
    this.setColor("#f5f5f5");
   }

   @Input('appBorderCard') border:string;

   @HostListener('mouseenter')onmouseenter(){
    this.setColor(this.border || '#009688');

   }

   @HostListener('mouseleave')mouseleave(){
    this.setColor('#f5f5f5');

   }


  setHeight(height:number){
    this.el.nativeElement.style.height=`${height}px`;
  }

  setColor(color:string){
    let colorbis="solid 4px "+color;
    this.el.nativeElement.style.border=colorbis;
  }

}
