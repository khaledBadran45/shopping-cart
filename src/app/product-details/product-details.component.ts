import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from '../get-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:string=""
  productDtails:any={}
  constructor(private _ActivatedRoute:ActivatedRoute , private _GetApiService:GetApiService) { }
  
  ngOnInit(): void {
   this.id = this._ActivatedRoute.snapshot.params.id;
   this._GetApiService.getbyid(this.id).subscribe((response)=>{
     this.productDtails = response
    })

    
  }
  setLocalStorage(data: any){
    localStorage.setItem('userprod',JSON.stringify(data))
  }
}