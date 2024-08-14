import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="container">
      <form>
        <h2>Responsive Form</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
