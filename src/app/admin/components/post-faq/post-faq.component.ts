import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-faq',
  templateUrl: './post-faq.component.html',
  styleUrls: ['./post-faq.component.scss']
})
export class PostFAQComponent {

  productId: number = this.activatedRoute.snapshot.params["productId"];
  faqForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {
    this.faqForm = this.fb.group({
      question: [null, [Validators.required]],
      answer: [null, [Validators.required]]
    });
  }

  postFAQ() {
    this.adminService.postFAQ(this.productId, this.faqForm.value).subscribe(
      (res) => {
        this.snackBar.open('FAQ Posted Successfully', 'Close', { duration: 5000 });
        this.router.navigateByUrl('/admin/dashboard');
      },
      (err) => {
        this.snackBar.open("Something went wrong", 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    )
  }
}
