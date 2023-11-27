import { Component, OnInit } from '@angular/core';
import { IUserPruebasUnitarias } from 'src/app/models/response/user-pruebas-unitarias';
import { PrincipalService } from 'src/app/providers/services/principal.service';

@Component({
  selector: 'app-pruebas-unitarias',
  templateUrl: './pruebas-unitarias.component.html',
  styleUrls: ['./pruebas-unitarias.component.sass']
})
export class PruebasUnitariasComponent  implements OnInit {
  users: IUserPruebasUnitarias[] = [];
  testOk:boolean = false
  error:boolean = false

  constructor(private principalService: PrincipalService){
  }

  ngOnInit(): void {
    this.getUsersTest();
  }

  getUsersTest() {
    this.principalService.getUsersTest().subscribe(
      (data) => {
        this.users = data
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
