import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { extract } from './i18n';
import { JobsComponent } from './jobs/jobs.component';
import { LoginService } from './@shared/login.service';
import { LoginComponent } from './login/login.component';
import { PartsComponent } from './parts/parts.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: JobsComponent, data: { title: extract('Home') } },
  { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
  { path: 'parts/:jobName', component: PartsComponent, data: { title: extract('Parts') } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
