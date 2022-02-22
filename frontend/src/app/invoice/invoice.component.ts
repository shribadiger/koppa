import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import {NgxPrintModule} from 'ngx-print';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id:number;
  description:string;
  quantity:number;
  amount:number;
  wieght:number;
  makingCharge:number;
  totalAmount:number;
  totalPayable: number;
  finalAmount:string;
  totalAdvance:number;
  calucatedAmount: number;
  calculatedCgst: number;
  calculatedSgst: number;
  todayDate : Date = new Date();
  invoiceNum:number= Date.now();
  constructor(private router: Router) { 
    this.totalAmount=0;
    this.totalPayable = 0;
    this.totalAdvance=0;
  }
  
  private orderList: Array<any> = [];
  private newAttribute: any = {};
  updateTotal_byCGST(cgst: string) {
    if (isNaN(parseFloat(cgst))) {
      this.totalPayable = this.totalPayable;
      this.get_calculateCgst("0")
    } else {
      this.totalPayable = this.totalAmount + (this.totalAmount * parseFloat(cgst) / 100);
      this.get_calculateCgst(cgst);
    }
  }
  get_calculateCgst(cgstPercentage: string) {
    this.calculatedCgst = this.totalAmount * parseFloat(cgstPercentage) / 100;
  }
  get_calculateSgst(sgstPercentage: string) {
    this.calculatedSgst = this.totalAmount * parseFloat(sgstPercentage) / 100;
  }
  updateTotal_bySGST(sgst: string) {
    if (isNaN(parseFloat(sgst))) {
      this.totalPayable = this.totalPayable;
      this.get_calculateSgst("0");
    } else {
      this.totalPayable = this.totalAmount + (this.totalAmount * parseFloat(sgst) / 100);
      this.get_calculateSgst(sgst);
    }
  }

  getAmt(Wt: string, Pr: string, MkCharge: string) {
    if (isNaN(parseFloat(Pr)) || isNaN(parseFloat(MkCharge)) || isNaN(parseFloat(Wt))) {
      return 0
    }
    else {
      return (parseFloat(Wt) * parseFloat(Pr) + parseFloat(MkCharge));
    }
  }
  addFieldValue(Id: string, Descp: string, Wt: string, Pr: string, MkCharge: string)
    {
    this.newAttribute = { "id": Id, "description": Descp, "weight": Wt, "price": Pr, "makingCharge": MkCharge, "amount": this.getAmt(Wt, Pr, MkCharge) }
        console.log(this.newAttribute);
        this.orderList.push(this.newAttribute)
        this.newAttribute = {};
    this.totalAmount = this.totalAmount + (this.getAmt(Wt, Pr, MkCharge));
    this.totalPayable = this.totalAmount;
    this.calucatedAmount = 0;
    }
   
  getAmount(iWeight: string, iPrice: string, iMakingCharge: string) {
    console.log(" I am inside the getAmount")
    this.calucatedAmount = 0
    console.log(parseFloat(iWeight));
    console.log(parseFloat(iPrice));
    console.log(parseFloat(iMakingCharge))
    if (isNaN(parseFloat(iPrice)) || isNaN(parseFloat(iMakingCharge))) {
      this.calucatedAmount = parseFloat(iWeight);
    }
    else {
      this.calucatedAmount = parseFloat(iWeight) * parseFloat(iPrice) + parseFloat(iMakingCharge)
    }
  }
    deleteFieldValue(index) {
        console.log("Deleting the value");
      this.totalAmount = this.totalAmount - parseFloat(this.orderList[index].amount);
        this.orderList.splice(index, 1);
    }
    addAdvance(advance='0'){
      console.log("Advance Amount");
      this.totalAdvance = parseFloat(advance);
      this.totalPayable = this.totalAmount - this.totalAdvance;
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
