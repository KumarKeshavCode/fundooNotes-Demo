import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)
  if(localStorage.getItem('id'))
  {
    return true;
  }
  router.navigate(['/login']);  // Redirect to login page if not authenticated
  return false;
};
