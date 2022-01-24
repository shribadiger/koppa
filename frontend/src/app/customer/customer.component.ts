import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dashboard(){
    this.router.navigate(['/dashboard']);
  }
  orders(){
    this.router.navigate(['/orders']);
  }
  catalog(){
    this.router.navigate(['/catalog'])
  }
  customer(){
    this.router.navigate(['/customer']);
  }
  reports(){
    this.router.navigate(['/reports'])
  }
  invoice(){
    this.router.navigate(['/invoice'])
  }
}
