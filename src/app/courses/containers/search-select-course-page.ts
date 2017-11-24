import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'schd2-search-select-course-page',
  templateUrl: './search-select-course-page.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSelectCoursePageComponent implements OnInit {
  items$;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch(code) {
    this.items$ = this.http.get<any[]>('https://api-schedule2.herokuapp.com/search', {
      params: { code }
    });
  }

}
