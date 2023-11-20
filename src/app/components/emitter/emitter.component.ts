import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeNumberComponent } from "../change-number/change-number.component";

@Component({
    selector: 'app-emitter',
    standalone: true,
    templateUrl: './emitter.component.html',
    styleUrl: './emitter.component.css',
    imports: [CommonModule, ChangeNumberComponent]
})
export class EmitterComponent {
    myNumber: number = 0;
    
    onChangeNumber(){
       this.myNumber = Math.floor(Math.random() * 10);
    }
}
