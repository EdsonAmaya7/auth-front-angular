import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardnComponent } from './dashboardn/dashboardn.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardnComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
