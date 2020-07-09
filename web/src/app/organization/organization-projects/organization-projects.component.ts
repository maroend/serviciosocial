import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-organization-projects',
  templateUrl: './organization-projects.component.html',
  styleUrls: ['./organization-projects.component.scss']
})
export class OrganizationProjectsComponent implements OnInit {
  organizationId = 0;
  projects =[];
  rows = [];
  count = 0;
  offset = 0;
  limit = 10;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe(params => {
        this.organizationId = params['id'];
      });
  }

  ngOnInit() {
    this.page(this.offset, this.limit);
    this.getProjects();
  }

  page(offset, limit) {
      this.count = this.projects.length;

      const start = offset * limit;
      const end = start + limit;
      const organizations = [];

      for (let i = start; i < end; i++) {
        organizations.push(this.projects[i]);
      }
      this.rows = organizations;
      
  }

  getProjects() {
    var model = {idOrganizacion: this.organizationId}
    this.service.getProjects(model).subscribe((res: any[])=>{
      this.projects = res;
      this.rows = res;
      this.page(0,10);
    })
  }

  onPage(event) {
    this.page(event.offset, event.limit);
  }
  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.projects.filter(function(d) {
      if(!d) return false;
      return d.organizacion.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
  onCreate(){
    this.router.navigate(['organizations','project'],{ queryParams:{id: this.organizationId}});
  }
  onEdit(item){
    this.router.navigate(['organizations','project'],{ queryParams:{id: this.organizationId, idProyecto: item.id}});
  }
  onDetails(item){
    this.router.navigate(['organizations','project-detail'],{ queryParams:{id: item.id}});
  }
  onAddHours(item){
    this.router.navigate(['organizations', 'hours'],{ queryParams:{id: item.id}});
  }

}
