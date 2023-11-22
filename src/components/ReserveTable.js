import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./ReserveTable.css"; // Assuming you have a separate CSS file

export default function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
 const handleBookTableClick = () => {
    // Navigate to the ReserveTable page
    window.location.href = "/components/Confirmation";
  };
  return (
    <div className="app-container">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="form-title">Reserve a table</h1>
        <label className="form-label">
          Enter your Full Name:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            className="form-input"
            placeholder="John Doe"
          />
        </label>
        <label className="form-label">
          Enter your Phone Number:
          <input
            type="number"
            name="age"
            value={inputs.age || ""}
            onChange={handleChange}
            className="form-input"
            placeholder="+25"
          />
        </label>
        <label className="form-label">
          Select the  type of Occasion:
          <select
            name="occasion"
            value={inputs.occasion || ""}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Female</option>
            <option value="date">date</option>
          </select>
        </label>
        <label className="form-label">
          Enter Reservation for how many People:
          <input
            type="number"
            name="reserved"
            value={inputs.reserved || ""}
            onChange={handleChange}
            className="form-input"
            placeholder="25"
          />
        </label>
        <button type="submit" className="form-submit" onClick={handleBookTableClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
