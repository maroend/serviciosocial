import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-hours',
  templateUrl: './organization-hours.component.html',
  styleUrls: ['./organization-hours.component.scss']
})
export class OrganizationHoursComponent implements OnInit {
  idProyecto = 0;
  form: FormGroup;
  alumno = 0;
  horasAlumno = [];
  alumnos = [];
  displayedColumns: string[] = ['no', 'horas', 'observaciones', 'fecha'];

  constructor(
    private fb: FormBuilder,
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.route.queryParams.subscribe(params => {
        this.idProyecto = params['id'];
      });
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      horasAvanzadas: new FormControl(''),
      observaciones: new FormControl('')
    });
    this.getAlumnosproyecto()
  }

  getAlumnosproyecto(){
    this.service.getAlumnos(this.idProyecto).subscribe((res: any[])=>{
      this.alumnos = res;
    })
  }
  getAvance(){
    this.service.getAlumnoAvance(this.alumno).subscribe((res: any[])=>{
      this.horasAlumno = res;
    })
  }

  save(){
    let model = this.form.value
    model.idAlumnosProyectosAsignados = this.alumno
    this.service.saveAvance(model).subscribe((res: any)=>{
      this.getAvance()
      this.form.reset()
      //this.router.navigate(['organizations','projects']);
    }, error=>{
      alert(error.error)
    })
  }

}
