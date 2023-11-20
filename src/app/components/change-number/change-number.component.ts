import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {

@Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
}
}
