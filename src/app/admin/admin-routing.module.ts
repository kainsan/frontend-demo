import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PostCouponComponent } from './components/post-coupon/post-coupon.component';
import { PostFAQComponent } from './components/post-faq/post-faq.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post-category', component: PostCategoryComponent },
  { path: 'post-product', component: PostProductComponent },
  { path: 'placedOrders', component: OrdersComponent },
  { path: 'post-coupon', component: PostCouponComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'faq', component: PostFAQComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }



