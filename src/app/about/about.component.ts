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
    testimonials: [
      {
        quote: `Jessica has been AMAZING with my daughter!  
        I take my daughter to Grow and Tell for help with final consonant deletion, and she has made SO much progress in these 3 months!  
        Jessica is able to work on sounds and words with my daughter, even when she just wants to play with the toys.  
        She uses multiple approaches to work on sounds with my daughter, and offers lots of ways we can work with our daughter at home to maximize progress.  
        Jessica turns all of the speech practice into a game, and my daughter loves getting to "go play with Miss Jess".  
        I would highly recommend her if you are considering speech therapy!`,
        by: 'Jennifer F.'
      },
      {
        quote: `I highly recommend Jessica Over and her company, Grow & Tell. 
        The connection she had with my daughter was amazing-- she not only showed us strategies that helped improve my daughter's speech, 
        but encouraged my daughter to express her feelings about her struggles, which gave me a window into what my daughter was going through. 
        Because Jessica is an educator, 
        the tips she shared me on navigating through the "system" was extremely valuable in helping my daughter get the services she was entitled to. 
        I cannot say enough good things-- there is no doubt that Jessica not only helped my daughter with her speech, 
        but enabled her to be ready to enter school.`,
        by: 'April W.'
      },
    ]
  };

  julie = {
    name: 'Julie Gelbaugh',
    imageSrc: 'assets/julie.jpg',
    title: 'Speech Language Pathologist',
    description: `Julie is a nationally and state certified Speech-Language Pathologist in Carlisle, Pennsylvania. She
      holds her Level I Pennsylvania teaching certification for Speech-Language Impaired students K-12. Julie has been a Speech-Language
      Therapist in the school setting since 2013. She began providing private services in 2016 with Grow & Tell SLP. 
      Julie grew up and currently resides in Carlisle with her family. She loves working in her home-town community. 
      Julie enjoys spending time with her husband and daughter, as well as traveling to visit friends and family.`,
    facebookHref: 'https://www.facebook.com/grow.and.tellSLP/?pnref=lhc',
    linkedInHref: '',
    testimonials: [
      {
        quote: `My 2-year old son began working with Julie early this year and almost immediately his speech began improving. 
        Working with a 2-year-old isn’t always easy, but Julie found ways to engage him successfully, and seeing Miss Julie is now my son’s favorite activity of the week! 
        She is patient and kind, loving and extremely effective. She has given us tools to use at home to continue working on improving his language skills, 
        and I’m happy to report he’s now back on track for his age! I would recommend Julie and Jess to anyone!`,
        by: 'Irene M.'
      },
      {
        quote: ``,
        by: ''
      },
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
