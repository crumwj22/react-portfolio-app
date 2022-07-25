import React from "react";
import headShot from "../../assets/images/selfimage2.png";

const styles = {
  selfImage: {
    minHeight: 250,
    maxHeight: 250,
  },
};

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <h2 className="d-block d-lg-none">Jesse Crumley</h2>
            <img
              className="rounded-circle mb-2"
              src={headShot}
              alt="self image"
              style={styles.selfImage}
            />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              <p class="mb-0">
                Apart from studying to become a web developer, I enjoy most of
                my time being outdoors. I enjoy landscaping, gardening, hiking,
                fishing, watersports, softball and spending time with family and
                friends.
              </p>
              <p class="mb-0">
                When forced indoors, I enjoy investing and I spend a large
                amount of my free time exploring the latest technology
                advancements such as electric vehicles, blockchain technology,
                and software development.
              </p>
            </p>

            <div className="row">
              <div className="columns contact-details">
                <p class="lead mb-5">
                  I have expierence with HTML, CSS, javascript, NodeJS, OOP,
                  express, SQL and Web APIs
                </p>
                <div class="social-icons">
                  <a
                    class="social-icon"
                    href="https://www.linkedin.com/in/jesse-crumley-3a929ba"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    class="social-icon"
                    href="https://github.com/crumwj22"
                    target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
