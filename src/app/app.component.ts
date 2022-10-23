import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Password } from './password.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Passwort-Manager';
  passwords:Password[]=[];
  passwordtoadd:Password= new Password;

  constructor(private ds: DataService) {}

  ngOnInit() {
  this.ds.getPasswords().subscribe((data: any) => {
    this.passwords = data;
  });
}

  addpassword(pw: Password){
    this.passwords.push(pw);
    this.passwordtoadd= new Password;
  }
}
