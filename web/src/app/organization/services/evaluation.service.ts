import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private api = `${environment.api}`

  constructor(private http: HttpClient, private utils: Utils) { }

  getPreguntas(){
    const uri = `${this.api}PreguntasEvaluacionAlumno`
    return this.http.get(uri);
  }
  getAlumnos(){
    const uri = `${this.api}Alumnos`
    return this.http.get(uri);
  }
  getEvaluacionAlumno(id){
    const uri = `${this.api}AlumnosEvaluaciones/getEvaluacionesByIdAlumno?idAlumno=${id}`
    return this.http.get(uri);
  }

  addEvaluacion(model){
    const uri = `${this.api}AlumnosEvaluaciones/addEvaluaciones`
    return this.http.post(uri, model);
  }
}
