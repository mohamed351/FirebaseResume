import { ReferencePeople } from './../model/reference';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  ReferencePeople: ReferencePeople[] = null;
  constructor(private ProfileService:ProfileService) { }

  ngOnInit(): void {
    this.ProfileService.GetReferences().subscribe(a => {
      this.ReferencePeople = a;
    });
  }

}
