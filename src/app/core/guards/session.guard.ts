import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class SessionGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      return this.checkToken();
  }

  constructor(private _userService: UserService, private _route: Router) {}
  public user?: any;

  /**
   * Función que nos permite válidar el token y dar una respuesta por medio del Guard.
   * @returns
   */
  private checkToken() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const {success, response} = await this._userService.getUserInfo();
        if (success) {
          const { user } = response;
          this.user = user;
          resolve(true);
        } else {
          reject(false);
          this._route.navigate(['/', 'auth']);
        }
      } catch (error) {
        console.log('Error GuardSession: ', error);
        reject(false);
        this._route.navigate(['/', 'auth']);
      }
    });
  }
}
