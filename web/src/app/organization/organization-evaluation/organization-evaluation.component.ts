import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';
import { CatalogosService } from 'src/app/admin/services/catalogos.service';
import { EvaluationService } from '../services/evaluation.service';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-evaluation',
  templateUrl: './organization-evaluation.component.html',
  styleUrls: ['./organization-evaluation.component.scss']
})
export class OrganizationEvaluationComponent implements OnInit {
  idOrganizacion = 0;
  periodos = [];
  proyectos = [];
  alumnos = [];
  preguntas = [];
  respuestas = []
  periodo = 0
  proyecto = 0
  alumno = 0
  displayedColumns: string[] = ['pregunta', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6'];

  constructor(
    private fb: FormBuilder,
    private service: EvaluationService,
    private catalogoService: CatalogosService,
    private router: Router,
    private proyectoService: ProjectService,
    private route: ActivatedRoute,
    ) { 
      this.route.queryParams.subscribe(params => {
        this.idOrganizacion = params['id'];
      });
  }

  ngOnInit(): void {
    this.getPeriodos()
    this.getAlumnos()
    this.getPreguntas()
  }

  getPeriodos(){
    this.catalogoService.getPeriodos().subscribe((res: any[])=>{
      this.periodos = res;
    })
  }

  getProyectos(){
    this.proyectoService.getByPeriodo(this.periodo).subscribe((res: any[])=>{
      this.proyectos = res;
    })
  }

  getAlumnos(){
    this.service.getAlumnos().subscribe((res: any[])=>{
      this.alumnos = res;
    })
  }

  getPreguntas(){
    this.service.getPreguntas().subscribe((res: any[])=>{
      this.preguntas = res;
    })
  }
  get isValid(){
    let valid = true;
    if(!this.alumno) valid = false;
    if(!this.periodo) valid = false;
    if(!this.proyecto) valid = false;
    this.preguntas.forEach(x=> {if(!x.respuesta)valid = false})
    return valid;
  }
  save(){
    this.preguntas.forEach(x=> {
      x.idPeriodo = this.periodo,
      x.idProyecto = this.proyecto,
      x.idAlumno = this.alumno,
      x.idPregunta = x.id
    })
    this.service.addEvaluacion(this.preguntas).subscribe((res: any)=>{
      this.router.navigate(['organizations','home']);
    }, error=>{
      alert(error.error)
    })
    
  }

}
