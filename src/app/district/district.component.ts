import { Component, OnInit } from '@angular/core';

import {GetApiService} from './get-api.service';
import { District, RootObjectDistrict } from '../models/districtmodel';
import { RootObjectSession,Session } from '../models/sessionmodel';
import { RootObjectStates, State } from '../models/statesmodel';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

 //Based on value UI will be displayed
 
 searchByDistrict:boolean | any;
 showSearchedRecordsByDistrict:boolean | any;
 
 //object for storing result of API
 allStates: RootObjectStates| any;
 myStateArray: State[]=[];
 allDistricts : RootObjectDistrict| any;
 myDistrictsArray : District[]=[];
 allSessions:RootObjectSession| any;
 mySessionArray: Session[]=[];
 allSessions2:RootObjectSession| any;
 mySessionArray2: Session[]=[];

 //Storing count of district , state and session for looping
 districtCount : number| any;
 stateCount:number| any;
 sessionCount:number| any;
 state_id:number| any;
 district_id:number| any;
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
 
 constructor(private getapiservices:GetApiService) { }

 ngOnInit(): void {
   
   this.searchByDistrict = true;
   this.showSearchedRecordsByDistrict=false;
 
   this.today = new Date();
   
   this.date = this.today.getDate();
   this.month = this.today.getMonth()+1;
   this.year = this.today.getFullYear();
   this.finalDate = this.date + '-' + this.month +'-' +this.year;
   this.vaccineType = "COVAXIN";
   this.ageLimit = 18;
   
   this.getStates();
 }



 //Get States from API
 getStates():void
 {
   this.getapiservices.getStates()
     .subscribe(response => {this.allStates = response.body
     this.stateCount = this.allStates.states.length;
       for(var i=0;i<this.stateCount;i++)
       {
         this.myStateArray[i] = this.allStates.states[i];
       }
     });
 }

 //On Selecting State Find Districts
 onSelectState(event:any)
 {
   this.mySessionArray=[];
   this.state_id = event.target.value;
   this.getapiservices.getDistricts(this.state_id)
     .subscribe(response => {this.allDistricts = response.body
     this.districtCount  = this.allDistricts.districts.length;
     for(var i=0;i<this.districtCount;i++)
     {
         this.myDistrictsArray[i] = this.allDistricts.districts[i];
     }
     });
 }

 //On Selecting District Find Vaccine Slots
 onSelectDistrictFindSlot(event:any)
 {
   
   this.mySessionArray=[];
   this.mySessionArray2=[];
     this.district_id = event.target.value;
     this.getapiservices.getSessionByDistrict(this.district_id,this.finalDate)
       .subscribe(response=> {
         this.allSessions = response.body
         this.sessionCount = this.allSessions.sessions.length;
         for(var i=0;i<this.sessionCount;i++)
         {
           this.mySessionArray[i] = this.allSessions.sessions[i];
         }
         if(this.sessionCount>0)
         {
           this.showSearchedRecordsByDistrict = true;
           
         }
         
       });
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
}
