import React, { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {

    const { name, value } = e.target;
      if (name === "name"){
        setName(value);
      } else if  (name === "email"){
        setEmail(value);
      } else if (name === "message"){
        setMessage(value);
      }
    };

    const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Contact has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
      <div className="main container p-3">
        <section>
          <h1>Contact</h1>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input 
              name="name"
              value={name}
              onChange={handleInputChange}
              type="text" 
              autoComplete="off" 
              placeholder="Enter your name" 
              className="form-control" 
              required />
               <div class="invalid-feedback name">
                  Error: Name is required information.
              </div>
            </div>
            <div className="form-group">
              <label>Email address</label> 
              <input 
              name="email"
              value={email}
              onChange={handleInputChange}
              type="email" 
              autoComplete="off" 
              placeholder="Enter your email address" 
              className="form-control" 
              required />
              <div class="invalid-feedback email">
                  Error: Email is required information.
              </div>
               <div class="invalid-feedback email-format">
                  Error: Email format is incorrect.
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
              name="message"
              value={message}
              onChange={handleInputChange}
              className="form-control" 
              placeholder="Enter your message"></textarea>
               <div class="invalid-feedback message">
                  Error: Message is required information.
              </div>
            </div>
            <div>
              <button className="btn" type="submit" onClick={handleFormSubmit}>Submit</button>
            </div>
          </form> 
        </section>
      </div>
   );
}