import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: [`
    h2 {
      color: aqua;
    }
  `]
})
export class CarComponent {

  carName = 'Ford';
  carYear = 2015;

  getName() {
    return this.carName;
  }

}
