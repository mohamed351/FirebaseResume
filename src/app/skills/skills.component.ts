import { Skills } from './../model/skills';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { Skilltypes } from '../model/SkillsTypes';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
 
  Skills: Skills[] = null;
  constructor(private ProfileService: ProfileService) { 
    
  }

  ngOnInit(): void {
    this.ProfileService.GetSkills().subscribe(a => {
      this.Skills = a;
      console.log(a);
      console.log(this.Skills);
    });
  }
  GetProgrammingLanguages() {
    return this.Skills.filter(a => a.type == Skilltypes.ProgrammingLanguages).reverse();
  }
  GetServerSide() {
   return this.Skills.filter(a => a.type == Skilltypes.FullStack);
  }
  GetFrontEnd() {
    return this.Skills.filter(a => a.type == Skilltypes.FrontEnd);

  }
  GetDatabases() {
    return this.Skills.filter(a => a.type == Skilltypes.Databases);
  }




}
