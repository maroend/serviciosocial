import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization-documents',
  templateUrl: './organization-documents.component.html',
  styleUrls: ['./organization-documents.component.scss']
})
export class OrganizationDocumentsComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      presentacion: new FormControl('si'),
      acreditacion: new FormControl('no'),
      recomendacion: new FormControl('si'),
      reglamento: new FormControl('no'),
      acta: new FormControl('n/a'),
      folleteria: new FormControl('no')
    });
    this.getDocumentos();
  }

  getDocumentos(){
    this.service.getDocuments().subscribe((res: any) => {
      this.form.setValue({
        presentacion: res.presentacion,
        acreditacion: res.acreditacion,
        recomendacion: res.recomendacion,
        reglamento: res.reglamento,
        acta: res.acta,
        folleteria: res.folleteria
      });
    }, error => this.form.reset())
  }

}
