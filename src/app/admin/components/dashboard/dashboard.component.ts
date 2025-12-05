import { Component } from '@angular/core';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  data: any;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAnalytics();
  }

  getAnalytics() {
    this.adminService.getAnalytics().subscribe(res => {
      this.data = res;
    })
  }
}
