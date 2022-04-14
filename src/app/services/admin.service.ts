import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl= "http://localhost:8080/api/v1/admin"
  constructor(private httpClient: HttpClient) { }

   //login to pass the data from the server to the controllers
   adminLogin(admin: Admin):Observable<Object>{
    console.log(admin);
    return this.httpClient.post(`${this.baseUrl}`,admin);
  }
}
