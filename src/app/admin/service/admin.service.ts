import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:5454/api/admin/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "category", categoryDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategories(): Observable<any> {
    return this.http.get(BASIC_URL + "categories", {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProduct(productDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "product", productDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + "products", {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductsByName(name: any): Observable<any> {
    return this.http.get(BASIC_URL + `search/${name}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `product/${productId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addCoupon(couponDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "coupon", couponDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getCoupons(): Observable<any> {
    return this.http.get(BASIC_URL + "coupon", {
      headers: this.createAuthorizationHeader(),
    })
  }

  getPlacedOrders(): Observable<any> {
    return this.http.get(BASIC_URL + "placedOrders", {
      headers: this.createAuthorizationHeader(),
    })
  }

  changeOrderStatus(orderId: number, status: string): Observable<any> {
    return this.http.get(BASIC_URL + `order/${orderId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  postFAQ(productId: number, faqDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `faq/${productId}`, faqDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAnalytics(): Observable<any> {
    return this.http.get(BASIC_URL + "analytics", {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
