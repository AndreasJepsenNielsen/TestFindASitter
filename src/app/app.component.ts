import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FindASitterSpring2019CS';




  add(a, b: number){
    return a+b;
  };
}

