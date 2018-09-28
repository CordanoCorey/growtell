import { Component, OnInit, Input } from '@angular/core';
import { truthy } from '@caiu/library';

@Component({
  selector: 'gt-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  @Input() quote = '';
  @Input() by = '';

  constructor() { }

  get show(): boolean {
    return truthy(this.quote) && truthy(this.by);
  }

  ngOnInit() {
  }

}
