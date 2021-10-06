import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  constructor(private _CartService:CartService) {}
  thProductList:any[]=[]
  thProductBhavior= new BehaviorSubject<any>(0)
  total:any
  totalpriceInt:any
  ngOnInit(): void {
    let usercard:any = localStorage.getItem('userCard')
    let productList = JSON.parse(usercard)
    this.thProductList = productList
    this.getTotalprice()
  }   
 getTotalprice(){
    const totalPrice = this.thProductList.reduce((accumilator,currentValue)=> {
      return accumilator + currentValue.price
      
     },0)
    this.total = totalPrice
   let totalParse = parseInt(this.total)
   this.totalpriceInt = totalParse
  } 


  
deletItem(product: any){
  this.thProductList.map((a:any , index:any)=>{
    if(product.id===a.id){
      let productDeletingPrice = product.price
      this.mince(productDeletingPrice)
         this.thProductList.splice(index,1)
         localStorage.setItem('userCard',JSON.stringify(this.thProductList)) 
         this.thProductBhavior.next(this.thProductList)
         this._CartService.BehaviorNumber(this.thProductBhavior.value)
        }
        
      }
  )
}
mince(productDeletingPrice: any){
  const productDeleting = this.thProductList.reduce((accumilator,currentValue)=> {
    return accumilator - currentValue.price
   },0)
   this.total = productDeleting+productDeletingPrice
   let totalParse = parseInt(this.total)
   this.totalpriceInt = totalParse
}
ramoveAllItems(){
  this.thProductList = []
  localStorage.setItem('userCard',JSON.stringify(this.thProductList))
  this.getTotalprice()
}


}



