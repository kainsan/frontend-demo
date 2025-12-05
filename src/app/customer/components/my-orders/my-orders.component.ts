import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {

  myOrders: any;
  displayedColumns: string[] = ['trackingId', 'amount', 'description', 'address', 'date', 'status', 'action'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getMyOrders();
  }

  getMyOrders() {
    this.customerService.getMyOrders().subscribe(res => {
      this.myOrders = res;
    })
  }
}
