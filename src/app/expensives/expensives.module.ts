import { ExpensivesComponent } from './expensives.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensivesRoutingModule } from './expensives.routing.module';
import { StoreComponent } from './store/store.component';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ExpensivesRoutingModule
  ],
  declarations: [
    ExpensivesComponent,
    StoreComponent,
    DetailComponent,
    FormComponent,
  ],
  exports: [ExpensivesComponent]
})
export class ExpensivesModule { }
