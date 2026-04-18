import { ChangeDetectorRef, Component } from '@angular/core';
import { Helper } from '../services/helper';
import { Api } from '../services/api';
import { Product } from '../models/Product';
import { RouterLink } from "@angular/router";
import { Loader } from '../loader/loader';


@Component({
  selector: 'app-home',
  imports: [RouterLink, Loader],
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
      this.showLoader = true
      // console.log(resp)
      // this.cdr.detectChanges()  ////  აუცილებელია ყველა ქოლის მერე 

      this.timeout = setTimeout(() => {
         this.showLoader = false 
         clearTimeout(this.timeout)
          this.produuctArr = resp
               this.cdr.detectChanges()
      }, 500);
      this.cdr.detectChanges()

    })



    this.api.getAll2("products").subscribe((resp : any) => {
      this.showLoader = true
   
      


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
 
  timeout : any
  showLoader = false

  product2Arr : any[] = []
  produuctArr : Product[] = []




}
