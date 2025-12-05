import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../auth/services/storage/user-storage.service';

const BASIC_URL = "http://localhost:5454/api/customer/";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

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

  addToCart(productId: any): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + "cart", cartDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getCartByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `cart/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  placeOrder(orderDto: any): Observable<any> {
    orderDto.userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + "placeOrder", orderDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getMyOrders(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `myOrders/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProductToWishlist(wishlistDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "wishlist", wishlistDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getWishlistByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `wishlist/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  giveReview(reviewDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "review", reviewDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}
