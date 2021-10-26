import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorEmailFormat, setErrorEmailFormat] = useState('');
    const [errorEmailRequired, setErrorEmailRequired] = useState('');
    const [errorNameRequired, setErrorNameRequired] = useState('');
    const [errorMessageRequired, setErrorMessageRequired] = useState('');

    const resetErrorMessages = _ => {
      setErrorEmailRequired('');
      setErrorEmailFormat('');
      setErrorNameRequired('');
      setErrorMessageRequired('');
    }

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
    resetErrorMessages();

    if (!name.length || !email.length || !message.length || !validateEmail(email)){
          if (!name.length) { 
            setErrorNameRequired('Error: Name is required.');
          }
          if (!email.length) {
            setErrorEmailRequired('Error: Email is required.');
          } 
          if (email.length && !validateEmail(email)) {
            setErrorEmailFormat('Error: Email format is incorrect.');
          }
          if (!message.length) {
            setErrorMessageRequired('Error: Message is required.');
          }   
      return;
    }
   
    alert(`Contact has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
    resetErrorMessages();
  };

  return (
      <div id="content" className="main container p-3">
        <section>
          <h1>Contact</h1>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input 
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              type="text" 
              autoComplete="off" 
              placeholder="Enter your name" 
              className="form-control" 
              required />
              {errorNameRequired && (
                <div>
                  <p className="error">{errorNameRequired}</p>
                </div>
              )}
            </div>
            <div className="form-group">
              <label for="email">Email address</label> 
              <input 
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              type="email" 
              autoComplete="off" 
              placeholder="Enter your email address" 
              className="form-control " 
              required
              aria-describedby="errorEmailRequired" />
              {errorEmailRequired && (
                <div>
                  <p id="errorEmailRequired" role="alert" className="error">{errorEmailRequired}</p>
                </div>
              )}
              {errorEmailFormat && (
                <div>
                  <p id="errorEmailFormat" role="alert" className="error">{errorEmailFormat}</p>
                </div>
              )}
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
              id="message" 
              name="message"
              value={message}
              onChange={handleInputChange}
              className="form-control" 
              placeholder="Enter your message"></textarea>
               {errorMessageRequired && (
                <div>
                  <p id="errorMessageRequired" role="alert" className="error">{errorMessageRequired}</p>
                </div>
              )}
            </div>
            <div>
              <button className="btn" type="submit" onClick={handleFormSubmit}>Submit</button>
            </div>
          </form> 
        </section>
      </div>
   );
}