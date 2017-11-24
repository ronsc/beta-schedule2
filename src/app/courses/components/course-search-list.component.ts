import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'schd2-course-search-list',
  templateUrl: './course-search-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchListComponent implements OnInit {
  @Input() items = [];

  constructor() { }

  ngOnInit() {
  }

}
