import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent  implements OnInit{
  constructor() { }

 userform!: FormGroup;

  ngOnInit() {
    this.userform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      pass:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}$')]),
      mail:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]+")]),
      
    });
  }
  
  }

