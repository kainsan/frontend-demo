import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  wishlist: any[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getWishlist();
  }

  getWishlist() {
    this.customerService.getWishlistByUserId().subscribe(res => {
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
        this.wishlist.push(element);
      });
    })
  }
}
