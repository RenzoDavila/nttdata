import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasUnitariasComponent } from './pruebas-unitarias.component';
import { PrincipalService } from 'src/app/providers/services/principal.service';
import { Observable, of, throwError } from 'rxjs';
import { IUserPruebasUnitarias } from 'src/app/models/response/user-pruebas-unitarias';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const UserPruebasUnitariasData = [
  {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
  },
  {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
  },
  {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
  },
  {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
  },
  {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "first_name": "George",
      "last_name": "Edwards",
  },
  {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "first_name": "Rachel",
      "last_name": "Howell",
  }
];


const mockedPrincipalService: {
  getUsersTest: () => Observable<IUserPruebasUnitarias[]>
} = {
  getUsersTest: () => of(UserPruebasUnitariasData)
}

describe('TEST de "PruebasUnitariasComponent"', () => {
  let component: PruebasUnitariasComponent;
  let fixture: ComponentFixture<PruebasUnitariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasUnitariasComponent ],
      providers: [{provide: PrincipalService, useValue: mockedPrincipalService}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe retornar lista de elementos obtenidos, getUsersTest()', () => {
    const getUsersTestSpy = spyOn(mockedPrincipalService, 'getUsersTest');

    getUsersTestSpy.and.returnValue(of(UserPruebasUnitariasData));
    component.getUsersTest();
    expect(mockedPrincipalService.getUsersTest).toHaveBeenCalled();
    expect(component.users).toEqual(UserPruebasUnitariasData);
  });

  it('Debe retornar lista vacia, getUsersTest()', () => {
    const getUsersTestSpy = spyOn(mockedPrincipalService, 'getUsersTest');

    getUsersTestSpy.and.returnValue(throwError(() => 'No funciona'));
    component.users = [];
    component.getUsersTest();
    expect(mockedPrincipalService.getUsersTest).toHaveBeenCalled();
    expect(component.users).toHaveSize(0);
  });
});
