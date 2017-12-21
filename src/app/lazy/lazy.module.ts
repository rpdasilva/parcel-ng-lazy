import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './lazy.routes';
import { LazyComponent } from './components/lazy/lazy.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
