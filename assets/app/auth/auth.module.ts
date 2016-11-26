import {NgModule} from "@angular/core";
import {LogoutComponent} from "./logout.component";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth.routing";
@NgModule({
  declarations: [
    LogoutComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouting
  ]
})
export class AuthModule {
  
}