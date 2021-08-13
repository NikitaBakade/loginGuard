import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addForm!: FormGroup;
  sessionArray:[]=[];

  constructor(private fb : FormBuilder, private route:Router) {
    console.log("login");
   }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', [Validators.required,Validators.minLength(4),Validators.maxLength(12)]]
    });
  }
 
  addData(obj:any){
    console.log(obj);
    console.log(obj.value);
    const array = (() => {
      const submitForm = sessionStorage.getItem('keyStore');
      return submitForm === null
        ? []
        : JSON.parse(submitForm);
      })();
    array.push(obj.value);
    sessionStorage.setItem('keyStore', JSON.stringify(array));
    this.route.navigate(['mainmodule/contact']);
  }
}