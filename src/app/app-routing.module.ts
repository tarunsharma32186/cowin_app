import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component'
import {PinComponent} from './pin/pin.component'
import {DistrictComponent} from './district/district.component'

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'pin',component:PinComponent},
  {path:'district',component:DistrictComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
