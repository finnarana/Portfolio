import React from 'react';

export default function Contact() {
    return (
        <>
            <div id="contactInfo">
                <h2>Contact Information</h2>
                <p>Phone: (647) 970-4201</p>
                <p>Email: frana2@my.centennial.ca</p>
                <p>Address: 9582 Markham Rd, Markham ON</p>
            </div>
            <form action='/'>
        <fieldset>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label><br></br>
          <textarea id="message" name="message" rows="10" cols="70"  required></textarea><br></br>

          <button type="submit">Send Form</button>
          </fieldset>
        </form>
        </>
    );
}


