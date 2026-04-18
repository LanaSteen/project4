import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http : HttpClient){
   
  }
    // http client  

    baseUrl = "https://restaurant.stepprojects.ge/api/"

    getAll(url : string){
     return this.http.get(this.baseUrl + url)   // https://restaurant.stepprojects.ge/api/Products/GetAll

    }


   baseUrl2 = "https://restaurantapi.stepacademy.ge/api/"
    getAll2(url : string){
      return this.http.get(this.baseUrl2 + url,{
        headers : {
         "X-API-KEY" : "14c34c99-91b6-41a8-ad96-f4d3dc43e35b",
          // "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJzdGVwYWNjMjEwQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOlsiVmlubWUiLCJWaW5tZSJdLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJVc2VyIiwiZXhwIjoxNzc1NTc2OTA0LCJpc3MiOiJjaHZlbiIsImF1ZCI6ImlzaW5pIn0.sWe7SgDiv1fbNQGdOOGELzyWXQPMX41uCi1npxzFwk0"
      }})
    }

   postUser(obj : any){
    return this.http.post("https://restaurantapi.stepacademy.ge/api/auth/login", obj, {
          headers : {
         "X-API-KEY" : "14c34c99-91b6-41a8-ad96-f4d3dc43e35b"}

    })
   }


    // https://restaurantapi.stepacademy.ge/api/auth/login

  // https://restaurantapi.stepacademy.ge/api/products



    postObj(url : string, obj : any){
     return this.http.post(this.baseUrl + url, obj)   // https://restaurant.stepprojects.ge/api/Products/GetAll

    }
    updateObj(url : string, obj : any){
     return this.http.put(this.baseUrl + url, obj) 

    }

    deelteById(url : string){
      return  this.http.delete(this.baseUrl + url)
    }

}
