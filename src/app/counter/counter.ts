import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  // handleIncrement = () => {
  //   this.count++;
  // };

  // handleDecrement = () => {
  //   if (this.count > 0) {
  //     this.count--;
  //   } else {
  //     alert('Count cannot be negative');
  //   }
  // };
  // handleReset = () => {
  //   this.count = 0;
  // };

  handleCounter=(action:string)=>{
    switch(action){
      case 'increment' : this.count++;
        break;
        case 'decrement' : this.count > 0 ? this.count-- : this.count = 0;
        break;
        case 'reset' : this.count = 0;
        break;
        default: alert('Invalid action');
        break;
    }
  }
}
