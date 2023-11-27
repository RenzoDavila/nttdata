import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserListManejoDatos } from 'src/app/models/response/user-list-manejo-datos';
import { IUserManejoDatos } from 'src/app/models/response/user-manejo-datos';
import { PrincipalService } from 'src/app/providers/services/principal.service';

@Component({
  selector: 'app-manejo-datos',
  templateUrl: './manejo-datos.component.html',
  styleUrls: ['./manejo-datos.component.sass']
})
export class ManejoDatosComponent implements OnInit {
  users1$: Observable<IUserListManejoDatos[]>;
  users2$: Observable<IUserListManejoDatos[]>;
  user$: Observable<IUserManejoDatos[]>;
  userId:number = 1
  error:boolean = false
  disableSubmit:boolean = false

  constructor(private principalService: PrincipalService){
    this.users1$ = principalService.getUserList('1');
    this.users2$ = principalService.getUserList('2');
    this.user$ = principalService.getUser(this.userId.toString());
  }

  ngOnInit(): void {}

  submit(){
    this.disableSubmit = true;
    if(this.error){
      this.getError();
    }
    else{
      this.user$ = this.principalService.getUser(this.userId.toString());
      this.disableSubmit = false;
    }
  }

  getError() {
    this.principalService.getError().subscribe(
      (data) => {
        console.log("getError", data)
      },
      (error) => {
        console.log(error);
        this.disableSubmit = false;
      }
    );
  }
}
