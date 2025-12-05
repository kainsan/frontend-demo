import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/auth/services/storage/user-storage.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

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
