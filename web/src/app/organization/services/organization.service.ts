import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private api = `${environment.api}Organizaciones`

  constructor(private http: HttpClient, private utils: Utils) { }

  getAll(){
    return this.http.get(this.api);
  }

  create(model){
    const uri = `${this.api}`
    return this.http.post(uri, model);
  }

  createWithDetails(model){
    const uri = `${this.api}/CreateWithDetails`
    return this.http.post(uri, model);
  }
}
