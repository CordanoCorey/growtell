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
      }
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
      }
    ]
  };

  kristen = {
    name: 'Kristen Arnold',
    imageSrc: 'assets/kristen.jpg',
    title: 'MS OTR/L',
    description: `Kristen is a licensed occupational therapist who lives in Wellsville, Pennsylvania.  She obtained her Master of Science degree in Occupational Therapy from Thomas Jefferson University in 2012.  As a graduate assistant, Kristen was part of a small team who ran groups focused on self-regulation and wellness for at-risk youth in North Philadelphia.  Since graduation, she has worked as a pediatric occupational therapist in both school-based and clinical settings with children and young adults ages 3-21.  Kristen has provided in-services to school staff and parents regarding self-regulation skills.  She is currently completing a Certified Clinical Trauma Professional (CCTP) Intensive Training Course online.  Outside of work, Kristen enjoys spending time with her husband, toddler son, and their yellow lab. Always a reader, she has recently shifted to audiobooks to maximize her free time!`,
    facebookHref: 'https://www.facebook.com/grow.and.tellSLP/?pnref=lhc',
    linkedInHref: '',
    testimonials: [
      {
        quote: ``,
        by: ''
      },
      {
        quote: ``,
        by: ''
      }
    ]
  };

  whitney = {
    name: 'Whitney Black',
    imageSrc: 'assets/whitney.jpg',
    title: 'MS CCC-SLP',
    description: `Whitney is a nationally and state certified Speech-Language Pathologist in Carlisle, Pennsylvania. She holds her Level 1 Educational Specialist certification for Speech-Language Impaired students PK-12. Whitney has been a Speech-Language Clinician in the school setting since 2017. She began providing private services in 2019 with Grow & Tell SLP. Whitney grew up and currently resides in Carlisle with her family. Whitney enjoys traveling, being outdoors, reading and spending time with family and friends. `,
    facebookHref: 'https://www.facebook.com/grow.and.tellSLP/?pnref=lhc',
    linkedInHref: '',
    testimonials: [
      {
        quote: `We are sad to be leaving the area and our wonderful speech therapist Whitney. She always had a smile on her face and so positive and upbeat. I knew she was always rooting for my child. They were always accommodating and flexible with scheduling and we enjoyed our time there. We started out with Julie, who was just as awesome and when she went on maternity leave we stayed with Whitney. We will miss you Whitney!`,
        by: 'Helen H.'
      },
      {
        quote: `
          If you are looking for Speech Therapy for your child, look no further. Grow and Tell is the best.
          My daughter took speech with Whitney, and her articulation has improved immensely!
          My daughter loves Whitney and could not wait to go to Speech each week.
          She had such a good time at Grow and Tell and we are so happy with how they helped our daughter.
          Just last week, our daughter met her therapy goal.
          While we are thrilled for our daughter, we are a little sad about not visiting Grow and Tell each week.
          My daughter really is going to miss herr time with Whitney.
          However, it is so great to see my daughter communicate so well now.
          I can't believe how much more confidence my daughter has with her speech now.
        `,
        by: 'Mary Parsons'
      }
    ]
  };

  constructor() { }

  ngOnInit() { }
}
