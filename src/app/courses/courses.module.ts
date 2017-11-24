import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material';
import {
    CourseSearchComponent,
    CourseSearchListComponent,
    TimetableComponent,
    TimetableCourseListComponent,
} from './components';
import { CreatePlanComponent } from './containers/create-plan.component';
import { SearchSelectCoursePageComponent } from './containers/search-select-course-page';
import { TimetablePlanPageComponent } from './containers/timetable-plan-page';
import { CoursesRoutingModule } from './courses-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [
    CourseSearchComponent,
    TimetableComponent,
    CreatePlanComponent,
    CourseSearchListComponent,
    TimetableCourseListComponent,
    SearchSelectCoursePageComponent,
    TimetablePlanPageComponent
  ]
})
export class CoursesModule { }
