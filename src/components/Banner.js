import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ title, subtitle, imageURL }) => {
  const handleBookTableClick = () => {
    // Navigate to the ReserveTable page
    window.location.href = "/components/ReserveTable";
  };

  return (
    <section className="banner">
      <div className="content">
        <div>
          <h1>{title}</h1>
          <span className="call-to-action">
            {subtitle} <i className="fas fa-long-arrow-alt-right"></i>
          </span>
        </div>
        <Button variant="warning" className="custom-button" onClick={handleBookTableClick}>
          Reserve a table
        </Button>{' '}
      </div>
      <img src={imageURL} alt="Banner" />
    </section>
  );
};

export default Banner;
