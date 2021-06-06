import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'vamsi'
  password = ''
  errorMessage = 'Invalid username/password'
  invalidLogin = false
  
  //Get Router component
  //Dependency Injection
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.username === 'vamsi' && this.password === 'dummy'){
      //Route to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
