import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nn-element',
  templateUrl: './nn-element.component.html',
  styleUrls: ['./nn-element.component.css']
})
export class NnElementComponent implements OnInit {

  BLANK = 0;
  FILLED = 1;
  CROSSED = 2;

  status = this.BLANK;

  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() : void {
    this.status++;
    if(this.status > 2) this.status = 0;
  }

}
