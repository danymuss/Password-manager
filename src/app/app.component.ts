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
  passwords: Password[] = [];
  passwordtoadd: Password = new Password;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getPasswords().subscribe((data) => {
      this.passwords = data;
    });
  }

  savePassword(pw: Password) {
    this.ds.addPassword(pw).subscribe((data: Password) => {
      this.passwords.push(data);
      this.passwordtoadd = new Password;
    });
  }
  deletePassword(id:number) {
    this.ds.deletePassword(id).subscribe(() => {
      this.passwords = this.passwords.filter((pw) => pw.id !== id);
    });
  }
  editPassword(pw: Password) {
    this.passwordtoadd = pw;
  }
}
