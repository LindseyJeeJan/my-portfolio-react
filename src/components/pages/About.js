export default function About() {
  return (
    <div id="content" className="main container p-3">
      <section>
        <h1>About Me</h1>
        <article className="about-content">
          <div className="article-content">
            <div>
              <h2 className="w-100">Front-End Developer &amp; Designer</h2>
              <p>
                Hi, I&apos;m Lindsey. I am a Front-end Software Engineer with a strong background in
                both design and development of responsive and accessible user interfaces for web
                applications. My goal is always to provide the best experience to the largest
                possible number of users.
              </p>
              <p>
                I enjoy creating accessible interfaces that are inclusively designed to provide an
                equal experience for all users. I have been developing with accessiblity in mind for
                over a decade and I enjoy learning as much as possible about supporting various
                assitive technologies. I consider myself both a designer and engineer.
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
