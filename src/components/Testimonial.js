import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonial extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/shirley.png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Customer</h4>
            <p>
              I absolutely love Little Lemon! The atmosphere is warm and inviting, and the staff is incredibly friendly. 
            </p>
          </div>
        </div>

        <div>
          <img src="/images/daniel.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Customer</h4>
            <p>
              The menu is a delightful mix of classic favorites and innovative dishes. I've tried their breakfast, lunch, and dinner options, and each meal has been a delicious experience. 
            </p>
          </div>
        </div>

        <div>
          <img src="/images/theo.png" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Customer</h4>
            <p>
               I highly recommend Little Lemon Hideout for anyone looking for a fantastic dining experience!"
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}