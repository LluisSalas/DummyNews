// Angular
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';

  @Output() btnClick: EventEmitter<MouseEvent> = new EventEmitter();

  onClick($event: MouseEvent): void {
    this.btnClick.emit($event);
  }
}
