import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  signUp(signupForm: NgForm) {
    const email = signupForm.value.email;
    const password = signupForm.value.password;
    console.log('form details:', email, password);
    this.authService.signupUser(email, password);
  }
}
