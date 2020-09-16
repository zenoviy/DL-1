import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';


interface UserProfile {
  userName: string;
  nickName: string;
  userMail: string;
  userPassword: string;
};


@Injectable({
  providedIn: 'root'
})



export class ServerRequestService {

  constructor( private http: HttpClient ) { }


  getServiceRequest(apiLink: string): any {
    return this.http.get(apiLink);
  }
  addNewUser(apiLink: string, body: UserProfile ): any{
    return this.http.post(apiLink, body);
  }
  
  deleteUser(apiLink: string, usertId: string): any{
    const headers = new HttpHeaders();
    headers.set("selecteduserid", usertId);

    return this.http.delete(apiLink, { headers });

  }
}
