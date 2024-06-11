import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input("disabled") disabled: boolean = false;
  @Input("loading") loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("subtmit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
