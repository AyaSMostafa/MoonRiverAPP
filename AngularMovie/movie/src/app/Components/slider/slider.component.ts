import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  images = [
    {title: 'Breakfast at Tiffany\'s', short: 'Breakfast at Tiffany\'s is a 1961 American romantic comedy film directed by Blake Edwards, written by George Axelrod, adapted from Truman Capote\'s 1958 novella of the same name, and starring Audrey Hepburn as Holly Golightly, a naïve, eccentric café society girl who falls in love with a struggling writer.', src: "assets/images/breakfast-at-tiffanys-header.jpg"},
    {title: 'Catch Me If You Can', short: 'the story of how Frank Abagnale, one of the most famous con-artists in history, faked over eight identities, several professions, and cashed over $2.5 million of forged checks in the 1960s, until the police finally caught him at age 21.', src: "assets/images/catch.jpg"},
    {title: 'Titanic', short: 'Aboard the Titanic, the aristocratic Rose finds a kindred spirit in the low-class drifter Jack. As love blossoms between the two, Rose\'s fiancé and her mother do their best to separate Jack and Rose, unaware that a terrible tragedy awaits all of them.', src: "assets/images/titanic2.jpg"}
  ];
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    // config.interval = 10000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }


  ngOnInit(): void {
  }
  
  title = 'ng-carousel-demo';
  
  // // slides = [
  // //   {img: "https://gsr.dev/material2-carousel/assets/demo.png"},
  // //   {img: "https://gsr.dev/material2-carousel/assets/demo.png"},
  // //   {img: "https://gsr.dev/material2-carousel/assets/demo.png"},
  // //   {img: "https://gsr.dev/material2-carousel/assets/demo.png"},
  // //   {img: "https://gsr.dev/material2-carousel/assets/demo.png"}
  // // ];
  
  // slides = [
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"},
  //   {img: "assets/images/background-main.jpg"}
  // ];

  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  // slickInit(e:any) {
  //   console.log('slick initialized');
  // }
    
  // breakpoint(e:any) {
  //   console.log('breakpoint');
  // }
    
  // afterChange(e:any) {
  //   console.log('afterChange');
  // }
    
  // beforeChange(e:any) {
  //   console.log('beforeChange');
  // }

  
}
