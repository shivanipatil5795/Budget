import { EmpService } from './services/emp.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { empVM } from 'src/emp';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
import { DBOperation } from 'src/Helpers/config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my_first_project';

  budgetform : FormGroup = new FormGroup({});

  employee : empVM[] = [];

  buttonText: string="save";
  operation : DBOperation;

  constructor( private _toastr : ToastrService, private fb: FormBuilder, private _empservice: EmpService)
  {

  }

  ngOnInit()
  {
     this.setEmpForm();
    this.allEmp();
  }

  setEmpForm()
  {
    this.buttonText="save";
    this.operation= DBOperation.create;
    this.budgetform =this.fb.group({

      id:[0],
      houserent:['', Validators.required],
      electricbill: ['', Validators.required],
      date: ['', Validators.required],
      emi: ['', Validators.required],
      other: ['', Validators.required],
    })
  }
  
  formSubmit()
  {
     console.log(this.budgetform.value);
     if(this.budgetform.invalid)
      {
        return;
      }

      switch(this.operation)
      {
        case DBOperation.create:
          this._empservice.addEmp(this.budgetform.value).subscribe(res=> {
            this._toastr.success("Budget Added Successfully");
            this.allEmp();
            this.resetBtn();
          });
          break;

          case DBOperation.Update:
            this._empservice.addEmp(this.budgetform.value).subscribe(res=> {
              this._toastr.success("Budget Added Successfully");
              this.allEmp();
              this.resetBtn();
            });
            break;
      }
  }

  get f(){

    return this.budgetform.controls;
  }

  resetBtn()
  {
     this.budgetform.reset();
     this.buttonText="Save";
  }

  cancelBtn()
  {
    this.budgetform.reset();
    this.buttonText="Save";
  }

  allEmp()
  {
    this._empservice.getAllEmp().subscribe((response : empVM[])=>{

      this.employee = response;

    });
  }
  Edit(empid: number)
  {
    this.buttonText="Update";
    this.operation= DBOperation.Update;
    //alert(empid);
    let empData =this.employee.find((e :empVM)=> e.id === empid);
    this.budgetform.patchValue(empData);
  }


  Delete(empid: number)
  {
   // alert(empid)
   
   

   const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this._empservice.deletetAllEmp(empid).subscribe(res=> {
        this.allEmp();
        this._toastr.success("Budget Deleted","Budget Registration")
     })
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

  }


}
