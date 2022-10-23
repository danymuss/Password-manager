import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Password } from './password.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/Passwords';

  getPasswords() {
    return this.http.get(this.url);
  }

  addPassword(pw: Password) {
    return this.http.post(this.url, pw);
  }

  updatePassword(pw:Password) {
    return this.http.put(this.url +'/'+ pw.id, pw);
  }

  deletePassword(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
