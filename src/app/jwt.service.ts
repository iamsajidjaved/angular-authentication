import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Router} from '@angular/router';
import { tap } from "rxjs/operators";

const headerOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class JwtService {
  baseUrl = "http://localhost:1337";

  credientials = {
    username: "",
    password: ""
  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.httpClient
      .post(
        this.baseUrl + "/auth/local",
        {
          identifier: username,
          password: password
        },
        headerOptions
      )
      .subscribe(data => {
        localStorage.setItem("access_token", data.jwt);
        this.router.navigate(['/']);
      });
  }

  register(username: string, password: string) {
    return this.httpClient
      .post(this.baseUrl + "/auth/register", { username, password })
      .subscribe(data => {
        this.login(username, password);
      });
  }

  logout() {
    localStorage.removeItem("access_token");
  }

  public loggedIn(): boolean {
    return localStorage.getItem("access_token") !== null;
  }
}
