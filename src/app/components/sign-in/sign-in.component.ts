import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  user = new User();
  // signInForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router) {
    // this.signInForm = this.fb.group({
    //   email: [''],
    //   password: ['']
    // })
  }

  onSubmit() {
    console.log(this.user);
    this.userService.login(this.user).subscribe((token) => {
      window.alert("User Logged in Successfully");
      this.router.navigate(['home']);
  }, error => {
      window.alert("User Login Error");
      console.log('Error: ', error)
  });
  }

}
