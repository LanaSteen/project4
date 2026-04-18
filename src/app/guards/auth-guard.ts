import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router)

  if(!localStorage.getItem("accessToken")){
      alert("Sign in First")
      router.navigateByUrl("/login")
      
      return false;
  }

  return true;
};
