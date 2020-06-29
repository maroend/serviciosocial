import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../services/organization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  rows = [];
  count = 0;
  offset = 0;
  limit = 10;

  constructor(private service: OrganizationService){

  }

  ngOnInit() {
    this.page(this.offset, this.limit);
  }

  page(offset, limit) {
    this.getOrganizations((results) => {
      this.count = results.length;

      const start = offset * limit;
      const end = start + limit;
      const rows = [...this.rows];

      for (let i = start; i < end; i++) {
        rows[i] = results[i];
      }

      this.rows = rows;
      console.log('Page Results', start, end, rows);
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

}
