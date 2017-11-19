import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schd2-timetable',
  templateUrl: './timetable.component.html',
  styles: []
})
export class TimetableComponent implements OnInit {
  tiles = [
    {
      day: 'วันจันทร์',
      times: [
        { text: 'Four', cols: 1, color: '#DDBDF1' },
        { text: 'One', cols: 3, color: 'lightblue' },
        { text: 'Two', cols: 1, color: '#e0e0e0' },
        { text: 'Three', cols: 2, color: 'lightpink' },
        { text: 'Four', cols: 2, color: '#DDBDF1' },
      ]
    },
    {
      day: 'วันอังคาร',
      times: [
        { text: 'Four', cols: 2, color: '#DDBDF1' },
        { text: 'One', cols: 1, color: 'lightblue' },
        { text: 'Two', cols: 3, color: 'lightgreen' },
        { text: 'Three', cols: 2, color: 'lightpink' },
        { text: 'Four', cols: 1, color: '#DDBDF1' },
      ]
    },
    {
      day: 'วันพุธ',
      times: [
        { text: 'Four', cols: 1, color: '#DDBDF1' },
        { text: 'One', cols: 3, color: 'lightblue' },
        { text: 'Two', cols: 1, color: 'lightgreen' },
        { text: 'Three', cols: 2, color: 'lightpink' },
        { text: 'Four', cols: 2, color: '#DDBDF1' },
      ]
    },
    {
      day: 'วันพฤหัสบดี',
      times: [
        { text: 'Four', cols: 1, color: '#DDBDF1' },
        { text: 'One', cols: 3, color: 'lightblue' },
        { text: 'Two', cols: 1, color: 'lightgreen' },
        { text: 'Three', cols: 2, color: 'lightpink' },
        { text: 'Four', cols: 2, color: '#DDBDF1' },
      ]
    },
    {
      day: 'วันศุกร์',
      times: [
        { text: 'Four', cols: 1, color: '#DDBDF1' },
        { text: 'One', cols: 3, color: 'lightblue' },
        { text: 'Two', cols: 1, color: 'lightgreen' },
        { text: 'Three', cols: 2, color: 'lightpink' },
        { text: 'Four', cols: 2, color: '#DDBDF1' },
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
