import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-organization-projects',
  templateUrl: './organization-projects.component.html',
  styleUrls: ['./organization-projects.component.scss']
})
export class OrganizationProjectsComponent implements OnInit {
  form: FormGroup;
  proyectos = []
  contactos = []
  periodos = []
  recursos = []
  horas = []

  constructor(
    private fb: FormBuilder,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      proyecto: new FormControl(''),
      objetivo: new FormControl(''),
      contacto: new FormControl(''),
      periodo: new FormControl(''),
      recursos: new FormControl(''),
      horas: new FormControl(''),
      horario: new FormControl(''),
      beneficios: new FormControl(''),
      horas_proyecto: new FormControl(''),
      descripcion_formacion: new FormControl(''),
      constancia: new FormControl(''),
      beneficios_alumno: new FormControl(''),
      descripcion_impacto: new FormControl(''),
      indicadores: new FormControl('')
    });
    this.getProyectos();
    this.getContactos();
    this.getPeriodos();
    this.getRecursos();
    this.getHoras();
  }

  getProyectos(){
    this.service.getProjects().subscribe((res: any[])=>{
      this.proyectos = res;
    })
  }

  getContactos(){
    this.service.getContacts().subscribe((res: any[])=>{
      this.contactos = res;
    })
  }

  getPeriodos(){
    this.service.getTerms().subscribe((res: any[])=>{
      this.periodos = res;
    })
  }

  getRecursos(){
    this.service.getResources().subscribe((res: any[])=>{
      this.recursos = res;
    })
  }

  getHoras(){
    this.service.getHours().subscribe((res: any[])=>{
      this.horas = res;
    })
  }

}
