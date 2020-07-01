import { Courses } from './../model/courses';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Courses: Courses[] = null;
  constructor(private ProfileService:ProfileService) { }

  ngOnInit(): void {
    this.ProfileService.GetCourses().subscribe(a => {
      this.Courses = a;
    });

  }

}
