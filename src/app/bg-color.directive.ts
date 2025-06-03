import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: false,
})
export class BgColorDirective implements OnInit {
  @Input() appBgColor:string
  @Input() myBorder:string

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';

  }
  constructor(private elementRef: ElementRef) {
    this.appBgColor = 'red';
    this.myBorder=""
    elementRef.nativeElement.style.backgroundColor = 'red';
    elementRef.nativeElement.style.color ='white'
  }

  ngOnInit() {
    if(this.appBgColor){
      this.elementRef.nativeElement.style.backgroundColor =this.appBgColor;
    }
    if(this.myBorder){
      this.elementRef.nativeElement.style.border =this.myBorder;
    }
  }
}
