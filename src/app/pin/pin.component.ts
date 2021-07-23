import { Component, OnInit } from '@angular/core';
import { RootObjectSession, Session } from '../models/sessionmodel';

import {GetApiService} from './get-api.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  //Based on value UI will be displayed
   searchByPin:boolean | any;
   showSearchedRecordsByPincode:boolean| any;
 
  //object for storing result of API
   allSessions:RootObjectSession | any;
   mySessionArray: Session[]=[];
   allSessions2:RootObjectSession | any;
   mySessionArray2: Session[]=[];
 
  //used to store pincode for API
   pincode:number| any;
 
  //Varibles for finding today Date
   today:Date| any;
   date:number| any;
   month:number| any;
   year:number| any;
   finalDate:string| any;
 
 
   vaccine = ["COVAXIN","COVISHIELD","SPUTNIK V"]
   ageGroup = [18,45];
   vaccineType:string| any;
   ageLimit:number| any;
   sessionCount:number| any;
   
   constructor(private getapiservice:GetApiService) { }
 
   ngOnInit(): void {
     this.searchByPin = false;
     this.showSearchedRecordsByPincode=false;
     this.today = new Date();
     this.date = this.today.getDate();
     this.month = this.today.getMonth()+1;
     this.year = this.today.getFullYear();
     this.finalDate = this.date + '-' + this.month +'-' +this.year;
     this.vaccineType = "COVAXIN";
     this.ageLimit = 18;
     
   }
 
  //For filtering output based on vacccine selected
   onVaccineSelected(event:any)
   {
     this.vaccineType = event.target.value;
   }
 
  //For filtering output based on Age Group Selected
   onAgeGroupSelected(event:any)
   {
     this.ageLimit = event.target.value;
    }
  //Find Slot By Pincode
   findByPincode(event:any)
   {
       this.mySessionArray2=[];
       this.pincode = event.target.value;
       
       if(this.pincode.toString().length==6)
       {
         this.pincode = event.target.value;
         this.getapiservice.getSessionByPin(this.pincode,this.finalDate)
         .subscribe(response=> {
           this.allSessions2 = response.body
           this.sessionCount = this.allSessions2.sessions.length;
           for(var i=0;i<this.sessionCount;i++)
           {
             this.mySessionArray2[i] = this.allSessions2.sessions[i];
           }
           if(this.sessionCount>0)
           {
             
             this.showSearchedRecordsByPincode = true;
           }
           
         });
       }
   }
 
 }


