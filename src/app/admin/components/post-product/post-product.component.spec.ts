import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoAngularMaterialModule } from 'src/app/DemoAngularMaterialModule';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostProductComponent } from './post-product.component';

describe('PostProductComponent', () => {
  let component: PostProductComponent;
  let fixture: ComponentFixture<PostProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostProductComponent],
      imports: [
        DemoAngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ]
    });
    fixture = TestBed.createComponent(PostProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
