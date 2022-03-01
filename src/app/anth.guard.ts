import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate() {
    if (localStorage.getItem('userName')) {
      return true
    } else {
      this.router.navigateByUrl('/login')
      return false
    }
  }
}
