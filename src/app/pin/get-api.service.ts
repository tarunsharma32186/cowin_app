import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

import { RootObjectSession } from '../models/sessionmodel';


const URL = "https://cdn-api.co-vin.in/api";


const URL_FINDBYPINCODE = "/v2/appointment/sessions/public/findByPin";


@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  baseURl: string = "https://cdn-api.co-vin.in/api";

  
  URL_FINDBYPINCODE_FINAL = URL + URL_FINDBYPINCODE;

  constructor(
    private http: HttpClient
  ) { }

  //Vaccination Session by Pin
  getSessionByPin(pincode: number, date: string): Observable<HttpResponse<RootObjectSession>> {
    return this.http.get<RootObjectSession>(this.URL_FINDBYPINCODE_FINAL + "?pincode=" + pincode + "&date=" + date, { observe: 'response' });
  }
}
