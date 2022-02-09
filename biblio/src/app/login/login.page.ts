import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
nom: any;
prenom : any;
email : any;
identifiant:any;
password : any;
confirmPassword : any;
  constructor(
    private service:ServiceService
  ) { }

  ngOnInit() {
  }

login(){
    let data = {
      nom:this.nom,
      prenom :this.prenom,
      email : this.email,
      identifiant:this.identifiant,
      password : this.password,
      confirmPassword :this.confirmPassword
    }
  }


}
