import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorEmailFormatMessage, setErrorEmailFormatMessage] = useState('');
    const [errorEmailRequiredMessage, setErrorEmailRequiredMessage] = useState('');
    const [errorNameRequiredMessage, setErrorNameRequiredMessage] = useState('');

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

    const resetErrorMessages = _ => {
      setErrorEmailRequiredMessage('');
      setErrorEmailFormatMessage('');
      setErrorNameRequiredMessage('');
    }

    const handleFormSubmit = (e) => {
    e.preventDefault();
    resetErrorMessages();

    if (!email.length && !name.length) {
        setErrorEmailRequiredMessage('Error: Email is required.');
        setErrorNameRequiredMessage('Error: Name is required.');
        return;
    } else if (!email.length) {
        setErrorEmailRequiredMessage('Error: Email is required.');
        return;
    } else if (!name.length && email.length && !validateEmail(email)) {
       setErrorNameRequiredMessage('Error: Name is required.');
       setErrorEmailFormatMessage('Error: Email format is incorrect.');
      return;
    } else if (email.length && !validateEmail(email)) {
      setErrorEmailFormatMessage('Error: Email format is incorrect.');
      return;
    }

    alert(`Contact has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
    resetErrorMessages();
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
              {errorNameRequiredMessage && (
                <div>
                  <p className="error">{errorNameRequiredMessage}</p>
                </div>
              )}
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
              className="form-control " 
              required />
              {errorEmailRequiredMessage && (
                <div>
                  <p className="error">{errorEmailRequiredMessage}</p>
                </div>
              )}
              {errorEmailFormatMessage && (
                <div>
                  <p className="error">{errorEmailFormatMessage}</p>
                </div>
              )}
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