import React from 'react';

export default function Contact() {
  return (
      <div className="main container p-3">
        <section>
          <h1>Contact</h1>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" autoComplete="off" placeholder="Enter your name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" autoComplete="off" placeholder="Enter your email address" className="form-control" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" placeholder="Enter your message"></textarea>
            </div>
            <button className="btn btn-dark" type="submit">Submit</button>
          </form> 
        </section>
      </div>
   );
}