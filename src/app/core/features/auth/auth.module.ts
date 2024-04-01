import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatCardModule],
  exports: [LoginFormComponent],
})
export class AuthModule { }
