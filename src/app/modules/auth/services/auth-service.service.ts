import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private _httpClient: HttpClient,
    private _cookieService: CookieService
  ) {}

  /**Función que nos permite eliminar el token de sesión */
  deleteToken() {
    this._cookieService.delete(environment.tokenName, '/');
  }

  /**Función que nos permite enviar las credenciales para la creación de un nuevo usuario */
  newUser(
    name: string,
    controlNumber: string,
    email: string,
    department: string,
    academicDegree: string,
    phoneNumber: string,
    password: string
  ) {
    const user = {
      name,
      controlNumber,
      email,
      department,
      academicDegree,
      phoneNumber,
      password,
    };
    console.log(user);
    return this.sendNewUser(user).toPromise();
  }

  /**Función que nos permite enviar las credenciales y validar el logIn */
  validLogin(email: String, password: String) {
    return this.sendCredentials(email, password).toPromise();
  }

  /**Nos permite verificar si existe el usuario, en caso de existir se pone el tokken_session */
  private sendCredentials(email: String, password: String): Observable<any> {
    const body = { email, password };
    return this._httpClient.post(`${environment.url}/user/logIn`, body).pipe(
      tap((responseOK: any) => {
        const {response} = responseOK;
        if (response) {
          this._cookieService.set(environment.tokenName, response, undefined, '/');
        }
      })
    );
  }

  /**Método que nos permite enviar las credenciales a la API */
  private sendNewUser(user: any): Observable<any> {
    return this._httpClient.post(`${environment.url}/user/signIn`, user);
  }
}
