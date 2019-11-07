import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms'
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from "./app-routing.module";
import {AuthGuard} from './auth.guard'

import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("access_token");
        },
        whitelistedDomains: ["localhost:3000"],
        blacklistedRoutes: ["http://localhost:3000/auth/login"]
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
