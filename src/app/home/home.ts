import { ChangeDetectorRef, Component } from '@angular/core';
import { Helper } from '../services/helper';
import { Api } from '../services/api';
import { Product } from '../models/Product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(private help : Helper, private api :Api, private  cdr : ChangeDetectorRef
  ){
   this.help.cleanString("      hello      ")

  }
  ngOnInit(){
    this.api.getAll("Products/GetAll").subscribe((resp : any) => {
      console.log(resp)
      this.produuctArr = resp

      this.cdr.detectChanges()  ////  აუცილებელია ყველა ქოლის მერე 

    })



    this.api.getAll2("products").subscribe((resp : any) => {
      console.log(resp.data.products)
      this.product2Arr =resp.data.products
      this.cdr.detectChanges()  ////  აუცილებელია ყველა ქოლის მერე 

    })
  
    this.api.getAll2("cart").subscribe((resp : any) => {
      console.log(resp)
      // this.product2Arr =resp.data.products
      // this.cdr.detectChanges()  ////  აუცილებელია ყველა ქოლის მერე 

    })
  }

  print(){}
 

  product2Arr : any[] = []
  produuctArr : Product[] = []

}
