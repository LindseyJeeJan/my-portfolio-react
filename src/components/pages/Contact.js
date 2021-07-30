import React from 'react';

export default function Contact() {
  return (
    <div className="main container p-3">
           <h1>Contact</h1>
          <form>

            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>E-mail address</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" ></textarea>
            </div>
            <button className="btn btn-default" type="submit">Submit</button>
          </form> 
      </div>
   );
}