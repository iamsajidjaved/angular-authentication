import { Injectable } from '@angular/core';
  import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtService} from './jwt.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private JwtService: JwtService, private Router: Router){}
  canActivate():boolean{
    if(this.JwtService.loggedIn()){
      return true;
    }else{
      this.Router.navigate(['/login']);
      return false;
    }
  }
  
}
