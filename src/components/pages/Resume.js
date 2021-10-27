import React from 'react';

export default function Resume() {
  return (
      <div id="content" className="main container p-3">
        <section>
          <h1>Resume</h1>
         
          <h2 className="mt-3">Front-end Skills</h2>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Accessibility</li>
              <li>Responsive Design</li>
            </ul>
          <h2 className="mt-3">Back-end Skills</h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>NPM</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>

             <div className="top-margin"><a href={process.env.PUBLIC_URL + "/assets/lindseylauria-resume.pdf"} rel="noreferrer" target="_blank">Download my resume &ndash; PDF <i class="fas fa-file-pdf"></i></a></div>
        </section>
      </div>
   );
}