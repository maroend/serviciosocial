import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  organizations =[]
  rows = [];
  count = 0;
  offset = 0;
  limit = 10;

  constructor(
    private service: OrganizationService,
    private router: Router){

  }

  ngOnInit() {
    this.page(this.offset, this.limit);
    this.getOrganizations();
  }

  page(offset, limit) {
      this.count = this.organizations.length;

      const start = offset * limit;
      const end = start + limit;
      const organizations = [];

      for (let i = start; i < end; i++) {
        organizations.push(this.organizations[i]);
      }
      this.rows = organizations;
      
  }

  getOrganizations() {
    this.service.getAll().subscribe((res: any[])=>{
      this.organizations = res;
      this.rows = res;
      this.page(0,10);
    })
  }

  onPage(event) {
    this.page(event.offset, event.limit);
  }
  documents(item){
    console.log(item);
    
  }
  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.organizations.filter(function(d) {
      if(!d) return false;
      return d.organizacion.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
  onCreate(){
    this.router.navigate(['organizations', 'add']);
  }
  onProjects(item){
    this.router.navigate(['organizations', 'projects'],{ queryParams:{id: item.id}});
  }

}
