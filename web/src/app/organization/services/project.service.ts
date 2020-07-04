import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private api = `${environment.api}Proyectos`

  constructor(private http: HttpClient, private utils: Utils) { }

  getProjects(model){
    const uri = `${this.api}/GetByIdOrganizacion?${this.utils.getAll(model)}`
    return this.http.get(uri);
  }

  create(model){
    const uri = `${this.api}/CreateWithDetails`
    return this.http.post(uri, model);
  }
}
