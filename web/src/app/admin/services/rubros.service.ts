import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class RubrosService {
  private api = `${environment.api}Rubros`

  constructor(private http: HttpClient, private utils: Utils) { }

  getAll(){
    return this.http.get(this.api);
  }
}
