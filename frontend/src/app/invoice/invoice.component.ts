import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  tableHeaders = ['Header 1', 'Header 2', 'Header 3'];

  tableRowsWithId = [
    [1, 'Example', 'Example', true]
  ];
  dataType = ['string', 'string', 'boolean'];
  constructor(private router: Router) { }
  id:number;
  description:string;
  quantity:number;
  amount:number;
  totalAmount:number;
  private orderList: Array<any> = [];
    private newAttribute: any = {};

    addFieldValue(Id:number,Descp:string,Quant:number,Amt:number)
    {
        this.newAttribute={id:Id,description:Descp,quantity:Quant,amount:Amt}
        console.log(this.newAttribute);
        this.orderList.push(this.newAttribute)
        this.totalAmount=this.totalAmount+this.amount;
        this.newAttribute = {};
        this.totalAmount = 1000;
    }

    deleteFieldValue(index) {
        this.orderList.splice(index, 1);
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

}
