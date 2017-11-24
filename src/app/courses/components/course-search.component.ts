import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'schd2-course-search',
  templateUrl: './course-search.component.html',
  styles: []
})
export class CourseSearchComponent implements OnInit {
  value = '';
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
