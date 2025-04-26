import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}, {
  path: 'dashboard',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
}, {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)}, {
  path: 'projects',
  loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
}, {
  path: 'finance',
  loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)
}, {path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
