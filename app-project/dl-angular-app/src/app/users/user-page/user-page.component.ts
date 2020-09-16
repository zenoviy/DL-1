import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServerRequestService } from '../../service/server-request.service';
import { StateServiceService } from '../../service/state-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  userForm: any;
  allUsers: object[];
  constructor(
    private serverRequest: ServerRequestService,
    private state: StateServiceService

  ) { }

  addNewUser(){
    console.log(this.userForm.invalid, this.userForm.error, this.userForm.value)

    this.serverRequest.addNewUser(this.state.apiParams['usersApi'], this.userForm.value).subscribe(data => {
      this.allUsers = data['dataBody'];
    })
  }

  deleteUSerBiId(userId){
    console.log(userId)
    this.serverRequest.deleteUser(this.state.apiParams['usersApi'], userId.toString())
    .subscribe(data => {
      this.allUsers = data['dataBody'];
    })
  }

  getAllUsersFromServer(){
    this.serverRequest.getServiceRequest(this.state.apiParams['usersApi'])
    .subscribe(data => {
      this.allUsers = data.dataBody;
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl('', [ Validators.required ]),
      nickName: new FormControl('', [ Validators.required ]),
      userMail: new FormControl('', [ 
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      userPassword: new FormControl('', [ Validators.required ])
    })


    this.getAllUsersFromServer()
  }
  
}
