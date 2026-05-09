import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateGoalsComponent } from './create-goals/create-goals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      navLabel: 'Dashboard',
      icon: 'dashboard'
    }
  },
  {
    path: 'summary',
    component: SummaryComponent,
    data: {
      navLabel: 'Summary',
      icon: 'summary'
    }
  },
  {
    path: 'create-goals',
    component: CreateGoalsComponent,
    data: {
      navLabel: 'Create Goals',
      icon: 'goal'
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
