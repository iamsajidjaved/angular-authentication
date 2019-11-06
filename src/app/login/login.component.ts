import { Component, OnInit } from "@angular/core";
import { JwtService } from "./../jwt.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private jwt: JwtService) {}

  ngOnInit() {}

  username: string;
  password: string;

  login() {
    this.jwt.login(this.username, this.password);
  }
}
