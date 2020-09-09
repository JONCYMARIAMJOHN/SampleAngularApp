import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from '../app/base/base.component';
import { ViewHistoryComponent } from '../app/view-history/view-history.component';
import { from } from 'rxjs';


const routes: Routes = [
  {
    path : 'home',
    component : BaseComponent
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : '/home'
  },
  {
    path: 'view-history/:city',
    component: ViewHistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
