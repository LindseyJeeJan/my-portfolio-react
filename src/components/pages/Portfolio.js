import React from 'react';

export default function Portfolio() {
  return (
    <div className="main container p-3">
      <section>
      <h1>Portfolio</h1>
      <div className="articles">
        <article>
          <div className="d-flex align-content-center justify-content-between">
            <h3>Favor Trader</h3>
            <a href="https://github.com/LindseyJeeJan/Favor-Trader" rel="noreferrer" target="_blank">Visit GitHub</a>
          </div>
          <div className="article-content">
            <p>The application provides the user with the ability to gather learning resources and coding solutions for various learning styles by connecting to StackExchange and YouTube APIs. The application provides 3 suggestions from each of the API resources. A Bookmarks feature helps the user to save their favorite content to local storage. This project uses Materialize and jQuery in addition to YouTube and StackExchange APIs.
              <a href="https://favortrader-ll.herokuapp.com/" rel="noreferrer" target="_blank" className="arrow-link">View demo</a>
            </p>
              <a href="https://github.com/LindseyJeeJan/Favor-Trader" rel="noreferrer" target="_blank" className="img">
              <img src={process.env.PUBLIC_URL + "/images/favor-trader.png"} alt="favor trader project" />
            </a>
          </div>
        </article>
        <article>
          <div className="d-flex align-content-center justify-content-between">
            <h3>Weather Dashboard</h3>
            <a href="https://github.com/LindseyJeeJan/weather-dashboard" rel="noreferrer" target="_blank">Visit GitHub</a>
          </div>
          <div className="article-content">
            <p>Weather Dashboard uses the OpenWeather API to retrieve weather data. The user may search for a city retrieve the current weather in addition to a five day forecast for that city. The application saves a list of recently searched for cities to quickly retrieve tha weather data. This project uses Bootstrap, jQuery and Moment.js.
              <a href="https://lindseyjeejan.github.io/weather-dashboard/" rel="noreferrer"target="_blank" className="arrow-link">View demo</a>
            </p>
              <a href="https://github.com/LindseyJeeJan/weather-dashboard" rel="noreferrer" target="_blank" className="img">
              <img src={process.env.PUBLIC_URL + "/images/weather-dashboard.png"} alt="weather dashboard project" />
            </a>
          </div>
        </article>
        <article>
          <div className="d-flex align-content-center justify-content-between">
            <h3>Study Buddy</h3>
            <a href="https://github.com/LindseyJeeJan/project-one" rel="noreferrer" target="_blank">Visit GitHub</a>
          </div>
          <div className="article-content">
            <p>The application provides the user with the ability to gather learning resources and coding solutions for various learning styles by connecting to StackExchange and YouTube APIs. The application provides 3 suggestions from each of the API resources. A Bookmarks feature helps the user to save their favorite content to local storage. This project uses Materialize and jQuery in addition to YouTube and StackExchange APIs.
              <a href="https://github.com/LindseyJeeJan/project-one" rel="noreferrer" target="_blank" className="arrow-link">View demo</a>
            </p>
              <a href="https://github.com/LindseyJeeJan/project-one"  rel="noreferrer"target="_blank" className="img">
              <img src={process.env.PUBLIC_URL + "/images/study-buddy.png"} alt="study buddy project" />
            </a>
          </div>
        </article>
      </div>
    </section>
      </div>
   );
}