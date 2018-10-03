import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'gt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit {

  entries = [
    {
      date: new Date(),
      title: '',
      by: '',
      content: `First, I am so thankful and feel incredibly blessed to be in a position where you’re reading about this! I hope you find this website a helpful resource for you and your family. 
      My name is Jessica and I am originally from Halifax, Pennsylvania.I moved to Carlisle, Pennsylvania when I was in second grade and graduated from Big Spring High School.I started my college career in Chambersburg, PA at Penn State Mont Alto but finished my undergraduate degree in Communication Sciences and Disorders at Penn State Main Campus in State College, PA.I moved to Pittsburgh, PA to attend The University of Pittsburgh for my graduate degree in Speech - Language Pathology. 
      From living in small rural and suburban communities to experiencing life in and around the city of Pittsburgh, it became evident that the services for individuals with communication disorders in Central Pennsylvania was far behind that of what was available in more urban areas.During grad school I had amazing opportunities to work in many clinical settings diagnosing and treating communication disorders; the DePaul School for the Deaf and Hard of Hearing, University of Pittsburgh Children’s Hospital, inpatient rehabilitation services at UPMC hospitals, and skilled nursing facilities.While I thoroughly enjoyed my work with adult patients, my heart and passion has always resided with children.As I’ve always been drawn to working with children, I didn’t necessarily feel that a school setting was where I wanted to spend the entirety of my professional career as a Speech - Language Pathologist.However, after graduation, I moved back to Central, PA and started working for Harrisburg Area City Schools.Having experienced some childhood hardships I loved putting my energy into the city schools and being a person of stability to my students.I married and moved to Carlisle, PA to start a family, which led me to moving my professional career to Carlisle Area School District.I love the environment Carlisle brings and look forward to raising my children in this amazing town.As a Speech - Language Pathologist a common question I would always get from families with children with communication disorders was “where else can I take my child for additional help?” I never had an answer.
      So, I started researching and looking for Speech - Language Therapy services in Central Pennsylvania.I found Early Intervention, Birth-3 services available through the individual counties, and preschool age services, ages 3 - 5, with the Capital Area Intermediate Unit; and of course, Penn State Hershey Children’s Hospital.But, overall services for school - age children within the immediate Carlisle area was severely limited outside of school programming. 
      My father was an entrepreneur as he started and managed his own business in the roofing and contracting industry; so, my underlying drive for business and community development stems from genetics.Being a compassionate and goal orientated person, I started researching private practices in the field of Speech-Language Pathology.I ordered a book to start my own practice and one thing led to another as I started seeing a few kids out of my home on weekends.As I became searchable through health insurance companies, a client wait list started to form and soon became more than I could manage on my own.I took a leap of faith and moved my small but growing private practice into Carlisle Pediatric Associates in August of 2017, and added a charismatic, compassionate and intelligent Speech - Language Pathologist, Julie Gelbaugh to the team.Adding Julie has allowed for continual growth and delivery of research based and developmentally supported therapy services to individuals and families in the immediate areas.Julie and I continue striving to make Grow & Tell a thriving place of “growing confidence in communication!” This fall we have decided to share a full time Speech-Language Pathology position at Crestview Elementary School(Carlisle Area School District) and open more availability to clients and families at Grow & Tell, LLC.We feel this provides a greater balance of professional responsibilities, professional development, family life, and community involvement.We are focused on improving the lives of children and their families with communication disorders.We can’t wait to meet you and offer our knowledge and skills to your family! 
      `
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
