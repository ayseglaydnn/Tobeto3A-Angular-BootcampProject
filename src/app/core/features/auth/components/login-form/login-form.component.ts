import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  submit() {
    console.log(this.loginForm);
  }
}
