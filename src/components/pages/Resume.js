import React from 'react';

export default function Resume() {
  return (
      <div className="main container p-3">
        <section>
          <h1>Resume</h1>
          <div>Download my  <a href={process.env.PUBLIC_URL + "/assets/lindseylauria-resume.pdf"} rel="noreferrer" target="_blank">resume</a>.</div>

          <h3 className="mt-3">Front-end Skills</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>JQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          <h3 className="mt-3">Back-end Skills</h3>
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
        </section>
      </div>
   );
}