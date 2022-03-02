import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  logout() {
    // const token = localStorage.getItem('token')
    // return this.http.logout(`${URL}/token`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
  }
}
