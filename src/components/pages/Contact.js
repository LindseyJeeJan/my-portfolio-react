import React, { useState } from 'react';
//import reactDom from 'react-dom';

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


    if (!name.length) {
        setErrorNameRequired('Error: Name is required.');
          if (!email.length && !validateEmail(email)) {
            setErrorNameRequired('Error: Email is required.');
          } else if (email.length && !validateEmail(email)) {
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
              {errorNameRequired && (
                <div>
                  <p className="error">{errorNameRequired}</p>
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
              {errorEmailRequired && (
                <div>
                  <p className="error">{errorEmailRequired}</p>
                </div>
              )}
              {errorEmailFormat && (
                <div>
                  <p className="error">{errorEmailFormat}</p>
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
               {errorMessageRequired && (
                <div>
                  <p className="error">{errorMessageRequired}</p>
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