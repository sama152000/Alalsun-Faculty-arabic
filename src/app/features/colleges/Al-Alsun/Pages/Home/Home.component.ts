import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../Home/Hero-section/Hero-section.component';
import { DeanMessageComponent } from '../Home/dean-message/dean-message.component';
// import { LatestNewsComponent } from './latest-news/latest-news/latest-news.component';
// import { VisionMissionComponent } from './vision-mission/vision-mission/vision-mission.component';
// import { DepartmentsComponent } from './departments/departments/departments.component';
// import { PostgraduateComponent } from './postgraduate/postgraduate/postgraduate.component';
// import { StudentActivitiesComponent } from './student-activities/student-activities/student-activities.component';
// import { QuickStatsComponent } from './quick-stats/quick-stats/quick-stats.component';
import { ContactLocationComponent } from '../Home/contact-location/contact-location.component';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  imports: [
    HeroComponent,
    DeanMessageComponent,
    // LatestNewsComponent,
    // VisionMissionComponent,
    // DepartmentsComponent,
    // PostgraduateComponent,
    // StudentActivitiesComponent,
    // QuickStatsComponent,
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
