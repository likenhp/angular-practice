import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';



@NgModule({
  declarations: [ViewComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponentComponent // must export a component so it can be used in another module
  ]
})
export class ViewModule { }
