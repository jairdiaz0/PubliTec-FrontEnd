import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private _httpClient: HttpClient,
    private _cookieService: CookieService
  ) {}

  getUserInfo():any {
    return this.sendToken('/token/verifyToken').toPromise();
  }
  getUserPost():any {
    return this.sendToken('/posts/getUserPost').toPromise();
  }
  getAllPost():any {
    return this.sendToken('/posts/getAllPost').toPromise();
  }
  uploadPost(body: FormData) {
    return this.sendPost('/files/uploadFile', body).toPromise();
  }

  private sendPost(route: string, body: FormData): Observable<any> {
    const token = this._cookieService.get(environment.tokenName);
    body.append('token', token);
    return this._httpClient.post(`${environment.url}${route}`, body);
  }

  private sendToken(route: string): Observable<any> {
    const token = this._cookieService.get(environment.tokenName);
    return this._httpClient.post(`${environment.url}${route}`, { token });
  }
}
