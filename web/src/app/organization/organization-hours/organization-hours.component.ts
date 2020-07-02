import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-organization-hours',
  templateUrl: './organization-hours.component.html',
  styleUrls: ['./organization-hours.component.scss']
})
export class OrganizationHoursComponent implements OnInit {
  form: FormGroup;
  alumno = undefined;
  horasAlumno = [];
  alumnos = [];
  displayedColumns: string[] = ['no', 'horas', 'observaciones', 'fecha'];

  constructor(
    private fb: FormBuilder,
    private service: OrganizationService
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      horas: new FormControl(''),
      observaciones: new FormControl('')
    });
    this.getHorasAlumno()
  }

  getHorasAlumno(){
    this.service.getStudentHours(this.alumno).subscribe((res: any[])=>{
      this.horasAlumno = res;
    })
  }

}
