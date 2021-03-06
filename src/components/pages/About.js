import React from 'react';

export default function About() {
  return ( 
    <div  id="content"  className="main container p-3">
        <section>
          <h1>About Me</h1>
          <article className="about-content">
           
            <div className="article-content">
              <div>
                <h2 className="w-100">Front End Designer &amp; Developer</h2>
                <p>Hi, I'm Lindsey. I am a Web Developer and a UI Designer. Designing user interfaces and building clean, accessible front end solutions is something I love to do. I enjoy creative activities, problem solving and learning new things.</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/lindsey-resized.png"} alt="lindsey lauria headshot" />
            </div>
          </article>
      </section>
    </div>
    );
}