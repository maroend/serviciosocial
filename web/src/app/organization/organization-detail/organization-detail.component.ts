import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent implements OnInit {
  organizacion = undefined;
  idOrganizacion = 0;
  documentos = []
  documentosEstados = []
  documentosOrganizacion = []

  constructor(
    private route: ActivatedRoute,
    private service: OrganizationService,
    private documentService: DocumentService,
    private router: Router
    ) {
      this.route.queryParams.subscribe(params => {
        this.idOrganizacion = params['id'] as number;
      });
    }

  ngOnInit(): void {
    this.getOrganizacion();
  }

  getOrganizacion(){
    this.service.getById(this.idOrganizacion).subscribe(res=>{
      this.organizacion = res;
      this.getDocumentos();
      this.getDocumentosEstados();
      this.getDocumentosOrganizacion();
    })
  }

  getDocumentos(){
    this.documentService.getDocuments(this.organizacion.configuracion).subscribe((res: any[])=>{
      this.documentos = res;
    })
  }

  getDocumentosOrganizacion(){
    this.documentService.getDocumentsByOrganization(this.idOrganizacion).subscribe((res:any[])=>{
      this.documentosOrganizacion = res;
    })
  }

  getDocumentosEstados(){
    this.documentService.getDocumentsStatus().subscribe((res: any[])=>{
      this.documentosEstados = res;
    })
  }
  getDocumentoEstatus(idDoc){
    var doc = this.documentosOrganizacion.find(x=>x.idDocumento==idDoc)
    if(doc) var estatus = this.documentosEstados.find(x=>x.id==doc.estado)
    return estatus ? true : false;
  }

}
