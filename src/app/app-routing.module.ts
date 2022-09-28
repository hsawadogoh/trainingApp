import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTrainingComponent } from './components/detail-training/detail-training.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'trainings/:training',
    component: DetailTrainingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
