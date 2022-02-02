import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {

  id:number;
  description:string;
  quantity:number;
  amount:number;
  wieght:number;
  makingCharge:number;
  totalAmount:number;
  totalBalance:number;
  finalAmount:string;
  totalAdvance:number;
  todayDate : Date = new Date();
  invoiceNum:number= Date.now();
  constructor(private router: Router) { 
    this.totalAmount=0;
    this.totalBalance=0;
    this.totalAdvance=0;
  }
  
  private orderList: Array<any> = [];
  private newAttribute: any = {};

  
    addFieldValue(Id:string,Descp:string,Quant:string,Wt:string, MkCharge:string,Amt:string)
    {
        this.newAttribute={"id":Id,"description":Descp,"quantity":Quant,"weight":Wt,"makingCharge":MkCharge,"amount":Amt}
        console.log(this.newAttribute);
        this.orderList.push(this.newAttribute)
        this.newAttribute = {};
        this.totalAmount=this.totalAmount+parseInt(Amt);
        this.totalBalance=this.totalAmount;
    }
   

    deleteFieldValue(index) {
        console.log("Deleting the value");
        this.totalAmount=this.totalAmount-parseInt(this.orderList[index].amount);
        this.orderList.splice(index, 1);
    }
    addAdvance(advance='0'){
      console.log("Advance Amount");
      this.totalAdvance=parseInt(advance);
      this.totalBalance=this.totalAmount-this.totalAdvance;
    }
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
  estimate(){
    this.router.navigate(['/estimate'])
  }

}
