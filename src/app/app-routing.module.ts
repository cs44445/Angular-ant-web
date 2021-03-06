import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnthGuard } from './anth.guard'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AnthGuard],
    children: [
      {
        path: 'employee',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: 'role',
        loadChildren: () => import('./role-module/role.module').then(m => m.RoleModule)
      },
      {
        path: 'authority',
        loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AnthGuard],
    children: [
      {
        path: 'employee',
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
