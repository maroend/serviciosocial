import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = `${environment.api}Usuarios`
  private readonly JWT_TOKEN = 'ss_token';

  constructor(private http: HttpClient, private utils: Utils) { }

  existToken(): boolean {
    const helper = new JwtHelperService();
    let token = this.getToken();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }

  login(model){
    const query = this.utils.getAll(model);
    return this.http.get(`${this.api}/login?${query}`);
  }
  getToken(): string {
    return sessionStorage.getItem(this.JWT_TOKEN);
  }
  getRol(): string {
    let token = this.getToken();
    return token ? token['rol'] : null;
  }
  storeToken(token: string) {
    sessionStorage.setItem(this.JWT_TOKEN, token);
  }
}
