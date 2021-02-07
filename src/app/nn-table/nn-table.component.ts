import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nn-table',
  templateUrl: './nn-table.component.html',
  styleUrls: ['./nn-table.component.css']
})
export class NnTableComponent implements OnInit {

  cols : number= 5;
  rows : number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCustomSize(size : number) : any[] {
    return new Array(size);
  }

}
