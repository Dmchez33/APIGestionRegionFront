import { Component, OnInit } from '@angular/core';
import { AuthentifierService } from '../service/authentifier.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form: any = {
    username: null,
    telephone: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthentifierService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, telephone, password } = this.form;

    this.authService.register(username, telephone, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}
