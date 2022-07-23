import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex-row space-between px-1">
      <ul>
        <li className="footer-item">
          <a
            className="footer-link"
            href="https://github.com/crumwj22"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="footer-item">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/jesse-crumley-3a929ba/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
