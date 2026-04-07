import { ChangeDetectorRef, Component } from '@angular/core';
import { Helper } from '../services/helper';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api';
import { Product } from '../models/Product';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
    constructor(
       private help : Helper
      , private rout : ActivatedRoute
      , private api :Api
      , private cdr : ChangeDetectorRef){
     this.help.cleanString("      hello      ")
     this.help.setLocal("name", "john")

     this.rout.queryParams.subscribe( data => {
      console.log(data['id']);
      this.selectedId = data['id']
     })
  
    }


    ngOnInit(){

      this.api.getAll("Products/GetAll").subscribe((resp : any) => {
      console.log(resp)
      this.produuctArr = resp
      this.selectedProduct =this.produuctArr.find(el => el.id == this.selectedId) || new Product()
      this.cdr.detectChanges()  ////  აუცილებელია ყველა ქოლის მერე 

    })
        
    }

   
    selectedProduct! : Product 
    selectedId : number = 0
    produuctArr : Product[] = []





}
