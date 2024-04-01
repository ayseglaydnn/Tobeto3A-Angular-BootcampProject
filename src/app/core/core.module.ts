import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './features/auth/auth.module';
import { LoginFormComponent } from './features/auth/components/login-form/login-form.component';



@NgModule({
  declarations: [],
  imports: [CommonModule, AuthModule],
  exports: [LoginFormComponent],
})
export class CoreModule { }
