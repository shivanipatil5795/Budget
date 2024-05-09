import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { empVM } from 'src/emp';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(){

    let budget: empVM[] = [
       {id:1, houserent:150000, electricbill:800, date:'12/5/2034',  emi:200000, other: 'movie ticket'},
       {id:2, houserent:250000, electricbill:900, date:'1/4/2024',  emi:200000, other: 'donation'},
       {id:3, houserent:250000, electricbill:700, date:'14/4/2024',  emi:200000, other: 'movie ticket'},
      ];
      return {budget};
  }
}
