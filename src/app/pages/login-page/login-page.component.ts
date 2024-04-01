import { Component } from '@angular/core';
import { LoginFormComponent } from "../../core/features/auth/components/login-form/login-form.component";
import { AuthModule } from '../../core/features/auth/auth.module';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [AuthModule]
})
export class LoginPageComponent {

}
