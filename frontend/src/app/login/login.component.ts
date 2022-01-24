import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log("Loign Invoked");
    console.log(this.username);
    console.log(this.password);
    if(this.username=="admin" && this.password=="admin"){
      this.router.navigate(['/dashboard'])
    } else {
      alert("Please enter correct credentials");
    }

  }

}
