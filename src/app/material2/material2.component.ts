import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material2',
  templateUrl: './material2.component.html',
  styleUrls: ['./material2.component.css']
})
export class Material2Component implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  
  constructor() { }

  ngOnInit() {
  }

}
