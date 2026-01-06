import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
    // canActivate: [loginGuard],
  },
  {
    path: 'ruleSpace',
    loadComponent: () =>
      import('./components/rule-space/rule-space.component').then(
        (m) => m.RuleSpaceComponent
      ),
  },
  {
    path: 'rule-group',
    loadComponent: () =>
      import('./components/rule-group/rule-group.component').then(
        (m) => m.RuleGroupComponent
      ),
  },
  {
    path: 'new-rule',
    loadComponent: () =>
      import('./components/new-rule/new-rule.component').then(
        (m) => m.NewRuleComponent
      ),
  },
  {
    path: 'sidecar',
    loadComponent: () =>
      import('./components/sidecar/sidecar.component').then(
        (m) => m.SidecarComponent
      ),
  },
];
