import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyComponent } from './components/lazy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyComponent }
    ])
  ],
  declarations: [LazyComponent]
})
export class LazyModule {}
