import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }
  cartContainer:any[] = []
  productListBehavior = new BehaviorSubject<any>([])
  BehaviorNumber(value: any) {
    this.productListBehavior.next(value)
  }

addToThaCart(product: any){
  this.cartContainer.push(product)
  localStorage.setItem('userCard',JSON.stringify(this.cartContainer)) 
  let usercard:any = localStorage.getItem('userCard')
  let productList = JSON.parse(usercard)
  this.productListBehavior.next(productList)
}
getProductList():Observable<any>
{
 return this.productListBehavior
}
} 