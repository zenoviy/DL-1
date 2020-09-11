import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  constructor( private http: HttpClient ) { }


  getServiceRequest(apiLink: string): any {
    return this.http.get(apiLink);
  }
}
