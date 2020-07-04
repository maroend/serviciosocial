import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error = ""

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    if(this.authService.existToken()) this.router.navigate(['administration', 'workloads'])
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    })
  }


  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res: any) => {
          if (res.resultado){
            this.authService.storeToken(res.token);
            this.router.navigate(['/organizations']);
          }
          else{
            alert(res.mensaje);
          }
        },
        error => {
          error = "Datos incorrectos"
          console.log(error.error)
        }
      );
    }
  }

}
