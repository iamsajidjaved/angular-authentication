import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {JwtService} from './jwt.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private JwtService: JwtService) { }

  intercept(req, next){
   let tokenizedRequest = req.clone({
      setHeaders:{
        'Authorization': 'Bearer '+ this.JwtService.getToken()
      }
    })

    return next.handle(tokenizedRequest);
  }
}
