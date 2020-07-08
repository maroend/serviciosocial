import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/shared/functions/utils';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private api = `${environment.api}`

  constructor(private http: HttpClient, private utils: Utils) { }

  getDocuments(id){
    const uri = `${this.api}Documentos/getDocumentoByConfiguracion?configuracion=${id}`
    return this.http.post(uri, null);
  }
  getDocumentsByOrganization(id){
    const uri = `${this.api}DocumentosOrganizaciones/getDocumentoByIdOrganizacion?idOrganizacion=${id}`
    return this.http.post(uri, null);
  }
  getDocumentsStatus(){
    const uri = `${this.api}EstadosDocumentos`
    return this.http.get(uri);
  }

  create(model){
    const uri = `${this.api}/CreateWithDetails`
    return this.http.post(uri, model);
  }
}
