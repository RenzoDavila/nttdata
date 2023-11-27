import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUsersList } from 'src/app/models/interfaces/users-list';
import { PATH_SERVICE } from 'src/app/constants/constants';
import { IUserManejoDatos } from 'src/app/models/response/user-manejo-datos';
import { IUser } from 'src/app/models/interfaces/user';
import { IUserListManejoDatos } from 'src/app/models/response/user-list-manejo-datos';
import { IUserPruebasUnitarias } from 'src/app/models/response/user-pruebas-unitarias';

@Injectable({
  providedIn: 'root',
})
export class PrincipalService {
  url = environment.server;
  constructor(private http: HttpClient) { }

  getUserList(page: string): Observable<IUserListManejoDatos[]> {
    let path = `${this.url}${PATH_SERVICE[1]}`
    path = path.replace('{page}', page);
    return this.http.get<IUsersList>(path).pipe(map(result => result.data));
  }

  getUser(id: string): Observable<IUserManejoDatos[]> {
    let path = `${this.url}${PATH_SERVICE[3]}`
    path = path.replace('{id}', id);
    console.log("path", path)

    return this.http.get<IUser>(path).pipe(map(
      result =>
      [
        {
          email: result.data.email,
          first_name: result.data.first_name,
          last_name: result.data.last_name
        }
      ]
    ));
  }

  getUsersTest(): Observable<IUserPruebasUnitarias[]> {
    let path = `${this.url}${PATH_SERVICE[1]}`
    path = path.replace('{page}', '1');
    // if(error){
    //   path = `${this.url}${PATH_SERVICE[8]}`
    // }
    return this.http.get<IUsersList>(path).pipe(map(result => result.data));
  }

  getError(): Observable<any> {
    let path = `${this.url}${PATH_SERVICE[7]}`
    return this.http.post(path, {"email": "peter@klaven"});
  }
}
