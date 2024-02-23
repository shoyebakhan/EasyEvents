import React from "react";
import { Carousel } from 'react-daisyui';
export default function MyCarousel() {
    return (
      <Carousel>
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </Carousel>
    );
}