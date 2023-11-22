import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./confirm.css"; // Assuming you have a separate CSS file
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
   const handleBookTableClick = () => {
    // Navigate to the ReserveTable page
    window.location.href = "/";
  };

  return (
    <div className="app-container">
      <div className="content">
        <div className="fa fa-check-circle-o symbol"></div>
        <div className="title">Thank you for booking a table!</div>
        <div className="text">Your reservation has been confirmed.</div>
        <Button variant="warning" className="custom-button" onClick={handleBookTableClick}>
          Return to the menu
        </Button>{' '}
      </div>
    </div>
  );
}
