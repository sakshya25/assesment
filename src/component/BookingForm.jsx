import React, { useState, useEffect } from "react";
import '../component/booking.css'
const BookingForm = ({ selectedMovie }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("userDetails");
    if (storedUserDetails) {
      setFormData(JSON.parse(storedUserDetails));
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userDetails", JSON.stringify(formData));
    window.location.href = "/";
  };

  return (
    <div className="BookingForm">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Movie:</label>
          <span>{selectedMovie ? selectedMovie.name : ""}</span>
        </div>
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookingForm;
