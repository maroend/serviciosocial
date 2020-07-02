import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization-evaluation',
  templateUrl: './organization-evaluation.component.html',
  styleUrls: ['./organization-evaluation.component.scss']
})
export class OrganizationEvaluationComponent implements OnInit {

  alumno = undefined;
  periodos = [];
  proyectos = [];
  alumnos = [];
  preguntas = [];
  respuestas = []
  displayedColumns: string[] = ['pregunta', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6'];

  constructor(
    private fb: FormBuilder,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {
    this.getPeriodos()
    this.getProyectos()
    this.getAlumnos()
    this.preguntas.push({
      nombre: "p1",
      pregunta: "Los proyectos realizados por el alumno tuvieron un impacto positivo en la fundación"
    })
    this.preguntas.push({
      nombre: "p2",
      pregunta: "Es respetuoso y proyecta actitudes positivas"
    })
    this.preguntas.push({
      nombre: "p3",
      pregunta: "Los proyectos realizados por el alumno tuvieron un impacto positivo en la fundación"
    })
    this.preguntas.push({
      nombre: "p4",
      pregunta: "Es respetuoso y proyecta actitudes positivas"
    })
    this.preguntas.push({
      nombre: "p5",
      pregunta: "Los proyectos realizados por el alumno tuvieron un impacto positivo en la fundación"
    })
    this.preguntas.push({
      nombre: "p6",
      pregunta: "Es respetuoso y proyecta actitudes positivas"
    })
  }

  getPeriodos(){
    this.service.getTerms().subscribe((res: any[])=>{
      this.periodos = res;
    })
  }

  getProyectos(){
    this.service.getProjects().subscribe((res: any[])=>{
      this.proyectos = res;
    })
  }

  getAlumnos(){
    this.service.getStudents().subscribe((res: any[])=>{
      this.alumnos = res;
    })
  }

  getPreguntas(){
    this.service.getQuestions().subscribe((res: any[])=>{
      this.preguntas = res;
    })
  }

}
