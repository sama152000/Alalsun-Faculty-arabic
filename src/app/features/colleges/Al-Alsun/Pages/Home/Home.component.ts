import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../Home/Hero-section/Hero-section.component';
import { DeanMessageComponent } from '../Home/dean-message/dean-message.component';
import { LatestNewsComponent } from '../Home/latest-news/latest-news.component';
import { VisionMissionComponent } from '../Home/vision-mission/vision-mission.component';
import { DepartmentsComponent } from '../Home/departments/departments.component';
import { PostgraduateComponent } from '../Home/postgraduate/postgraduate.component';
// import { StudentActivitiesComponent } from './student-activities/student-activities/student-activities.component';
import { QuickStatsComponent } from '../Home/quick-stats/quick-stats.component';
import { ContactLocationComponent } from '../Home/contact-location/contact-location.component';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  imports: [
    HeroComponent,
    DeanMessageComponent,
    LatestNewsComponent,
    VisionMissionComponent,
    DepartmentsComponent,
    PostgraduateComponent,
    // StudentActivitiesComponent,
    QuickStatsComponent,
    ContactLocationComponent,
    NavbarComponent,
    FooterComponent
],
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
