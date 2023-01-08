export default function About() {
  return (
    <div id="content" className="main container p-3">
      <section>
        <h1>About Me</h1>
        <article className="about-content">
          <div className="article-content">
            <div>
              <h2 className="w-100">Front End Designer &amp; Developer</h2>
              <p>
                Hi, I&apos;m Lindsey. I am a Front-end Developer and a UI Designer. Designing user
                interfaces and building clean, accessible front-end solutions is something I love to
                do.
              </p>
              <p>
                I specialize in creating accessible interfaces that are inclusively designed to
                provide an equal experience for all users. I have been involved with accessiblity
                for over a decade and I enjoy learning as much as I can about how to support various
                assitive technologies.
              </p>
              <p></p>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/lindsey-resized.png`}
              alt="lindsey lauria headshot"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
