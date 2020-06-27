import { Education } from './../model/education';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-information',
  templateUrl: './education-information.component.html',
  styleUrls: ['./education-information.component.css']
})
export class EducationInformationComponent implements OnInit {
  Education: Education[] = null;
  constructor(private ProfileService:ProfileService) { }

  ngOnInit(): void {
    this.ProfileService.GetEducation().subscribe(a => {
      this.Education = a.reverse();
    });
  }
  ProcessLink<HtmlElement>(description:string) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return description.replace(urlRegex, function (url) {
   
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  }

}
