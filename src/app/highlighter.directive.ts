import { Directive, Input, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appHighlighter]"
})
export class HighlighterDirective {
  private backgroundColor: string;

  @Input() defaultColor = "white";

  @Input() highlightColor = "green";

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  }
}
