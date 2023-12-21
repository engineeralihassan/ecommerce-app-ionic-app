import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-testimonial-carousel',
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
})
export class TestimonialCarouselComponent {

 
  testimonialData = [
    {
      name: "Emily Johnson",
      review: "I stumbled upon this food haven, and it's been a game-changer for my taste buds! The flavors are exquisite, and each dish feels like a culinary masterpiece. I can't get enough of the delectable dishes this place has to offer. A must-try for all food enthusiasts!",
    },
    {
      name: "Alex Rodriguez",
      review: "As a foodie, I'm always on the lookout for exceptional dining experiences. This place exceeded all my expectations. The attention to detail in every dish is remarkable. From appetizers to desserts, each bite is a journey of taste. Highly recommend to anyone who appreciates fine dining.",
    },
    {
      name: "Sarah Thompson",
      review: "I consider myself a picky eater, but this place won me over completely. The quality of ingredients and the skill in the kitchen are evident in every bite. The menu offers a diverse range of options, ensuring there's something for everyone. I've found my new go-to spot for satisfying my food cravings!",
    },
    {
      name: "Michael Chang",
      review: "The food here is a symphony of flavors that dance on your palate. It's not just a meal; it's an experience. The chefs have a magic touch that turns each dish into a masterpiece. The ambiance complements the dining journey perfectly. This place has become my top recommendation for anyone seeking a memorable dining experience.",
    },
  ];
  
  // You can now use the 'foodTestimonials' array in your code as needed.
  ;


}
