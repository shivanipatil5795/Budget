import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { empVM } from 'src/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private API_BASE_PATH : string ='http://localhost:4200/api/';

  constructor(private hc: HttpClient) { }

  getAllEmp(){

    return this.hc.get(this.API_BASE_PATH + "budget")
  }

  getEmp(empid: number)
  {
    return this.hc.get(`${this.API_BASE_PATH}budget/${empid}`);

  }

 deletetAllEmp(empid: number){

    return this.hc.delete(`${this.API_BASE_PATH}budget/${empid}`);

 //  return this.hc.delete(this.API_BASE_PATH +"budget/" + empid);
  }

  addEmp(empobj : empVM)
  {

    return this.hc.post(`${this.API_BASE_PATH}budget`,empobj);
  }

  UpdateEmp(empobj : empVM)
  {

    return this.hc.put(`${this.API_BASE_PATH}budget${empobj.id}`,empobj);
  }
}
