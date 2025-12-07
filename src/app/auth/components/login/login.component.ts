import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service';
import { UserStorageService } from '../../services/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private userStorageService: UserStorageService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;
    this.authService.login(username, password).subscribe(
      {next:(response) => {
          const token = localStorage.getItem('token') || '';
          const user = {
            userId: response.userId,
            role: response.role
          };
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);

          UserStorageService.setLoggedIn(true);

          this.snackBar.open('Login successful', 'Close', { duration: 5000 });

          if (UserStorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl('/admin/dashboard');
          } else if (UserStorageService.isCustomerLoggedIn()) {
            this.router.navigateByUrl('/customer/dashboard');
          }
      },error:(error) => {
          this.snackBar.open('Bad credentials', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }}
    )
  }
}
