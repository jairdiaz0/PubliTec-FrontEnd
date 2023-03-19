import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/modules/auth/services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class CookieSessionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this._authService.deleteToken();
    return true;
  }
  constructor(private _authService: AuthServiceService) {}
}
