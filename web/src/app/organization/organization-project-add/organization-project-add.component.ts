import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogosService } from 'src/app/admin/services/catalogos.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-organization-project-add',
  templateUrl: './organization-project-add.component.html',
  styleUrls: ['./organization-project-add.component.scss']
})
export class OrganizationProjectAddComponent implements OnInit {
  form: FormGroup;
  formPlazas: FormGroup;
  contactos = []
  periodos = []
  recursos = []
  horas = []
  carreras = []
  organizationId: number = 0;
  listaPlazas = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: OrganizationService,
    private proyectoService: ProjectService,
    private catalogoService: CatalogosService,
    private router: Router
    ) { 
      this.route.queryParams.subscribe(params => {
        this.organizationId = params['id'] as number;
      });
    }

  ngOnInit(): void {
    console.log(this.organizationId);
    
    this.form = this.fb.group({
      nombre: new FormControl(''),
      objetivo: new FormControl(''),
      idContacto: new FormControl(''),
      idPeriodo: new FormControl(''),
      idRecursosEconomicos: new FormControl(''),
      idContabilizacionHoras: new FormControl(''),
      horario: new FormControl(''),
      beneficiosInstitucionales: new FormControl(''),
      horasProyecto: new FormControl(''),
      descripcionFormacion: new FormControl(''),
      constancia: new FormControl(true),
      descripcionBeneficiosAlumno: new FormControl(''),
      descripcionImpactoSocial: new FormControl(''),
      indicaciones: new FormControl(''),
      noAlumnosAutorizados: new FormControl('')
    });
    this.formPlazas = this.fb.group({
      idCarrera: new FormControl(''),
      requeridos: new FormControl(''),
      actividades: new FormControl('')
    });
    this.getOrganizacion();
    this.getPeriodos();
    this.getRecursos();
    this.getHoras();
    this.getCarreras();
  }

  create(){
    let model = this.form.value;
    model.listaPlazas = this.listaPlazas;
    model.idOrganizacion = Number(this.organizationId);
    console.log(model);
    
    this.proyectoService.create(model).subscribe((res: any)=>{
      this.router.navigate(['organizations','projects'], {queryParams: {id: this.organizationId}});
    }, error=>{
      alert(error.error)
    })
  }

  getOrganizacion(){
    this.service.getById(this.organizationId).subscribe((res: any)=>{
      this.contactos = res.listaContactos;
    })
  }

  getPeriodos(){
    this.catalogoService.getPeriodos().subscribe((res: any[])=>{
      this.periodos = res;
    })
  }

  getRecursos(){
    this.catalogoService.getRecursos().subscribe((res: any[])=>{
      this.recursos = res;
    })
  }

  getHoras(){
    this.catalogoService.getContabilizacionHoras().subscribe((res: any[])=>{
      this.horas = res;
    })
  }

  getCarreras(){
    this.catalogoService.getCarreras().subscribe((res: any[])=>{
      this.carreras = res;
    })
  }

  getCarrera(id){
    var carrera = this.carreras.find(x=>x.id==id);
    return carrera ? carrera.carrera : ""
  }

  addPlaza(){
    let value = this.formPlazas.value;
    this.listaPlazas.push(value);
    this.formPlazas.reset();
  }

  removePlaza(item){
    const index: number = this.listaPlazas.indexOf(item);
    if (index !== -1) {
        this.listaPlazas.splice(index, 1);
    } 
  }

}
