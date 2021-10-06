import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  onTCard:number=0
  constructor(private _CartService:CartService) { }
  ngOnInit(): void {
    this._CartService.getProductList().subscribe((res)=>{

      this.onTCard = res.length
    })
    
  }
}





