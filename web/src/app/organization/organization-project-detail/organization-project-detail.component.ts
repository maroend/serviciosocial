import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../services/organization.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-organization-project-detail',
  templateUrl: './organization-project-detail.component.html',
  styleUrls: ['./organization-project-detail.component.scss']
})
export class OrganizationProjectDetailComponent implements OnInit {
  proyecto = undefined;
  idProyecto = 0;

  constructor(
    private route: ActivatedRoute,
    private service: ProjectService,
    private router: Router
    ) {
      this.route.queryParams.subscribe(params => {
        this.idProyecto = params['id'] as number;
      });
    }

  ngOnInit(): void {
    this.getProyecto();
  }

  getProyecto(){
    this.service.getById(this.idProyecto).subscribe(res=>{
      this.proyecto = res;
    })
  }

}
