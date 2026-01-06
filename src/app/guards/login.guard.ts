import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    // ✅ Allow route access
    return true;
  } else {
    // 🚫 Redirect to login if not authenticated
    router.navigate(['/login']);
    return false;
  }
};
