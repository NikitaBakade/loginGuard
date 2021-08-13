import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sessionData : any;
  session: any;
  constructor(private rout: Router) { }

  ngOnInit(): void {
    console.log("contact");
    this.sessionData = JSON.parse(sessionStorage.getItem('keyStore')|| '{}');
    // console.log("sessionData",this.sessionData); 
  }

  deleteName(nameKey:any){
    // this.sessionData.splice(nameKey, 1);
    console.log(nameKey);
    console.log(nameKey.name);
    this.sessionData = JSON.parse(sessionStorage.getItem('keyStore') || '{}');
    console.log(this.sessionData)
    if (!this.session) { 
      this.session = []; 
    } else {
      this.session = JSON.parse(this.session); 
    }
    this.session.push({
      email: nameKey.email,
      password: nameKey.password
    }); 
    // this.sessionData.splice(nameKey, 1)
    sessionStorage.setItem('keyStore', JSON.stringify(this.session));
  }
}