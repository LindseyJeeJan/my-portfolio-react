import React from 'react';

export default function About() {
  return ( 
    <div className="main container p-3">
        <section>
          <h1>About</h1>
          <article className="about-content">
           
            <div className="article-content">
              <div>
                <h3 className="w-100">Web Designer &amp; Developer</h3>
                <p>Hi, I'm Lindsey. I am a web developer and a UI designer. Designing user interfaces and building clean, effective front end solutions is something I love to do. I enjoy creating, problem solving and learning new things.</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/images/lindsey-resized.png"} alt="lindsey lauria headshot" />
            </div>
          </article>
      </section>
    </div>
    );
}