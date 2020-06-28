import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { experience } from '../model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: experience[] = null;
  constructor(private Profile:ProfileService) { }

  ngOnInit(): void {
    this.Profile.GetExperance().subscribe(a => {
      this.experience = a;
    });
  }
  ProcessLink<HtmlElement>(description:string) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return description.replace(urlRegex, function (url) {
   
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  }

}
