import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:any[]=[]
  constructor(private _GetApiService:GetApiService,private _CartService:CartService) { }
  ngOnInit(): void {  
    this._GetApiService.getProducts().subscribe((data)=>{
      this.products = data
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })

    
  }
addToCart(product: any){
  this._CartService.addToThaCart(product)
}
 
}


















