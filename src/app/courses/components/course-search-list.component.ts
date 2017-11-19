import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'schd2-course-search-list',
  templateUrl: './course-search-list.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseSearchListComponent implements OnInit {
  typesOfShoes = ['คอมพิวเตอร์ในชีวิตประจำวันอังคารที่', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() {
  }

}
