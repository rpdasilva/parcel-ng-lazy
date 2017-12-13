import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello {{message}}</h1>
    <a routerLink="/lazy">Lazy Load</a>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  message = 'world';
}
