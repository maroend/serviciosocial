import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private api = `${environment.api}`

  constructor(private http: HttpClient, private utils: Utils) { }

  getPeriodos(){
    const uri = `${this.api}Periodos`;
    return this.http.get(uri);
  }

  getRecursos(){
    const uri = `${this.api}RecursosEconomicos`;
    return this.http.get(uri);
  }

  getContabilizacionHoras(){
    const uri = `${this.api}ContabilizacionHoras`;
    return this.http.get(uri);
  }

  getCarreras(){
    const uri = `${this.api}Carreras`;
    return this.http.get(uri);
  }
}
