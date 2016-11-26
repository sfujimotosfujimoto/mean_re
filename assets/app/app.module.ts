import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "./messages/message.service";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./errors/error.component";
import {ErrorService} from "./errors/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
      AppComponent,
      
      AuthenticationComponent,
      HeaderComponent,
      
      ErrorComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routing,
      HttpModule,
      MessageModule
    ],
    bootstrap: [AppComponent],
  providers: [AuthService, ErrorService]
})
export class AppModule {

}