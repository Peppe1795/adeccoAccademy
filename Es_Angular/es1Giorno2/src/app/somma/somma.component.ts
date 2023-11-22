import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somma',
  templateUrl: './somma.component.html',
  styleUrls: ['./somma.component.sass'],
})
export class SommaComponent implements OnInit {
  value1: number = 0;
  value2: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
