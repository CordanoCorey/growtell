import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() name = '';
  @Input() imageSrc = '';
  @Input() title = '';
  @Input() description = '';
  @Input() facebookHref = '';
  @Input() linkedInHref = '';
  @Input() testimonials = [];

  constructor() { }

  ngOnInit() {
  }

}
