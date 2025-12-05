import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/auth/services/storage/user-storage.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private userStorageService: UserStorageService,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) { }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
