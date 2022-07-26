import { right } from "@popperjs/core";
import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
    textAlign: "center",
    display: "flex",
    flexWrap: "row",
    justifyContent: "space-between",
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  navTabs: {
    justifyContent: "flex-end",
    float: "right",
  },
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.card}>
      <ul className="nav nav-tabs" style={styles.navTabs}>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projectsPage"
            onClick={() => handlePageChange("ProjectsPage")}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "ProjectsPage" ? "nav-link active" : "nav-link"
            }
          >
            Projects page
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
