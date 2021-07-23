import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarun';
 
   searchByPin:boolean | any;
   searchByDistrict:boolean | any;
    
   showFindByDistrictForm()
   {
     this.searchByDistrict = true;
     this.searchByPin = false;
   }
 
   showFindByPinForm()
   {
     this.searchByPin = true;
     this.searchByDistrict = false;
   }
}