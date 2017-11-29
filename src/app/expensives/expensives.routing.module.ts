import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FormComponent} from "./form/form.component";
import { DetailComponent } from './detail/detail.component';
import { StoreComponent } from './store/store.component';

const cursosRoutes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'new', component: FormComponent },
  { path: 'edit/:id', component: FormComponent },
  { path: 'detail/:id', component: DetailComponent },

];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class ExpensivesRoutingModule {}
