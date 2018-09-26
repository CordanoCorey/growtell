import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  jess = {
    name: 'Jessica Over',
    imageSrc: 'assets/jess.jpg',
    title: 'Speech Language Pathologist',
    description: `Jessica is a nationally and state certified Speech-Language Pathologist in Carlisle, Pennsylvania. She
    holds her Level II Pennsylvania teaching certification for Speech-Language Impaired students K-12. Jessica has been a
    Speech-Language Therapist in the school setting since 2010. In addition, Jessica has worked in rehabilitation
    Speech-Language therapy services and Early Intervention Speech-Language therapy services (birth-3 years). She started
    her private  Speech-Language therapy business in November of 2014. In her spare time Jessica enjoys being a mother
    to two girls and a wife. She enjoys reading and being outdoors.`,
    facebookHref: 'https://www.facebook.com/grow.and.tellSLP/?pnref=lhc',
    linkedInHref: 'https://www.linkedin.com/in/jessica-over-9a697011b?trk=nav_responsive_tab_profile',
  };

  julie = {
    name: 'Julie Brent',
    imageSrc: 'assets/julie.jpg',
    title: 'Speech Language Pathologist',
    description: `Julie is a nationally and state certified Speech-Language Pathologist in Carlisle, Pennsylvania. She
      holds her Level I Pennsylvania teaching certification for Speech-Language Impaired students K-12. Julie has been a Speech-Language
      Therapist in the school setting since 2013. She began providing private services in 2016 with Grow & Tell SLP. In
      her spare time Julie enjoys coaching the Carlisle high school cheerleaders as well as being a wife.`,
    facebookHref: 'https://www.facebook.com/grow.and.tellSLP/?pnref=lhc',
    linkedInHref: '',
  };

  constructor() { }

  ngOnInit() {
  }

}
