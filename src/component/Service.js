import React from 'react'
import { useState } from "react";
import "./service.css"


const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      return;
    }
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    console.log("Form submitted successfully!");
  };


  const validateForm = (data) => {
    const errors = {};

    if (!data.name) {
      errors.name = "Please enter your name.";
    } else {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(data.name)) {
        errors.name = "Please enter a valid name containing only letters and spaces.";
      }
    }

    if (!data.email) {
      errors.email = "Please enter your email.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!data.preferredDate) {
      errors.preferredDate = "Please select a preferred date.";
    }

    if (!data.preferredTime) {
      errors.preferredTime = "Please select a preferred time.";
    }

    if (data.message.length < 10) {
      errors.message = "Message must have at least 10 characters.";
    }

    return error;
  }

  return (
    <div>
       <section className="appointment">
          <h2>Request an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="preferred-date">Preferred Date:</label>
              <input type="date" id="preferred-date" name="preferred-date" required />
            </div>

            <div className="form-group">
              <label htmlFor="preferred-time">Preferred Time:</label>
              <input type="time" id="preferred-time" name="preferred-time" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (optional):</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>

            <button type="submit">Submit Request</button>
          </form>
        </section>
        
    </div>
  )
}

export default Service