import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private api = `${environment.api}Proyectos`
  private apiAlumnos = `${environment.api}AlumnosProyectosAsignados`
  private apiAvance = `${environment.api}AvanceHorasAlumno`

  constructor(private http: HttpClient, private utils: Utils) { }

  getProjects(model){
    const uri = `${this.api}/GetByIdOrganizacion?${this.utils.getAll(model)}`
    return this.http.get(uri);
  }
  getById(id){
    const uri = `${this.api}/${id}`
    return this.http.get(uri);
  }
  getAlumnos(id){
    const uri = `${this.apiAlumnos}/getByIdProyecto?idProyecto=${id}`
    return this.http.get(uri);
  }
  getAlumnoAvance(id){
    return this.http.get(`${this.apiAvance}`);
  }
  saveAvance(model){
    return this.http.post(this.apiAvance, model);
  }

  getByPeriodo(id){
    const uri = `${this.api}/GetByIdPeriodo?idPeriodo=${id}`
    return this.http.get(uri);
  }

  create(model){
    const uri = `${this.api}/CreateWithDetails`
    return this.http.post(uri, model);
  }
}
