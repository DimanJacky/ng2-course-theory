import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
  <h2>Single Car</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque facilis laudantium molestias mollitia numquam reiciendis ullam voluptatibus. A ab atque, debitis enim est fugit omnis quidem recusandae? Officia, sint?</p>
  `,
  styles: [`
    h2 {
      color: aqua;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
