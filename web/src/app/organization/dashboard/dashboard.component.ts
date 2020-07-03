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
  }

  page(offset, limit) {
    this.getOrganizations((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      const organizations = [...this.organizations];
      this.rows = results

      for (let i = start; i < end; i++) {
        organizations[i] = results[i];
      }

      this.organizations = organizations;
    });
  }

  getOrganizations(cb) {
    this.service.getAll().subscribe((res: any[])=>{
      cb(res);
    })
  }

  onPage(event) {
    console.log('Page Event', event);
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

}
