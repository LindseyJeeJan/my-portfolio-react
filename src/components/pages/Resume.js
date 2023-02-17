export default function Resume() {
  return (
    <div id="content" className="main container p-3">
      <section>
        <h1>Resume</h1>
        <div className="skillsets">
          <div className="skillset">
            <h2 className="mt-3">Front-end Skills</h2>
            <ul>
              <li>
                Accessibility
                <ul>
                  <li>ARIA</li>
                  <li>WCAG</li>
                </ul>
              </li>
              <li>CSS</li>
              <li>HTML</li>
              <li>JavaScript</li>
              <li>Jest</li>
              <li>Virtual DOM</li>
              <li>State Managment</li>
              <li>TypeScript</li>
              <li>Vue</li>
              <li>React</li>
              <li>Responsive Design</li>
              <li>Rest API</li>
              <li>SASS</li>
            </ul>
          </div>
          <div className="skillset">
            <h2 className="mt-3">Back-end Skills</h2>
            <ul>
              <li>GraphQL</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
            </ul>

            <h2 className="mt-3">Development Tools</h2>
            <ul>
              <li>Agile</li>
              <li>Eslint</li>
              <li>Git</li>
              <li>GitLab</li>
              <li>Jira</li>
              <li>NPM</li>
              <li>Webpack</li>
              <li>Yarn</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
