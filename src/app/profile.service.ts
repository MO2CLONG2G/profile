import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  endpoint = "http://168.172.120.67/register"
  constructor(private http:HttpClient) { }
  createProfile(applicant){
    return this.http.post<any>(this.endpoint, applicant)
   }
}
