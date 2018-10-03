import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() offsetLeft = 0;
  @Input() windowWidth = 0;

  constructor() { }

  ngOnInit() {
  }

}
