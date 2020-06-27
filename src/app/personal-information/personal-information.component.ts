import { Profile } from './../model/profile';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  Profile: Profile = null;
  constructor(private ProfileService:ProfileService) {


   }

  ngOnInit(): void {
    this.ProfileService.GetInfo().subscribe(a => {
      this.Profile = a[0];
      console.log(this.Profile);
  
      

    });
  }

}
