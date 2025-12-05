import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  products: any[] = [];
  searchForm: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.searchForm = this.fb.group({
      title: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.products = [];
    this.customerService.getAllProducts().subscribe(res => {
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    })
  }

  submitForm() {
    this.products = [];
    const title = this.searchForm.get('title')!.value;
    this.customerService.getAllProductsByName(title).subscribe(res => {
      res.forEach((element: any) => {
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.products.push(element);
      });
    })
  }

  addToCart(id: number) {
    this.customerService.addToCart(id).subscribe(res => {
      console.log("Product added to cart:", res);
      this.snackBar.open("Product added to cart successfully", "Close", { duration: 5000 });
    }, error => {
      console.error("Error adding to cart:", error);
      if (error.status === 403) {
        this.snackBar.open("Access Denied: You do not have permission to add to cart.", "Close", { duration: 5000 });
      } else if (error.status === 409) { // Assuming 409 for conflict/already exists
        this.snackBar.open("Product already in cart", "Close", { duration: 5000 });
      } else {
        this.snackBar.open("Error adding product to cart: " + error.message, "Close", { duration: 5000 });
      }
    })
  }
}
