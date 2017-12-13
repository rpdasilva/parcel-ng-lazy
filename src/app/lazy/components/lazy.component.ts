import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy',
  template: `<h2>Lazy {{message}}</h2>`
})
export class LazyComponent {
  message = 'component';
}
