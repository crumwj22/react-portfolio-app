import React from "react";
import Project from "../Project";
import bitcoinTracker from "../../assets/images/bitcoin_tracker.png";
import busyParents from "../../assets/images/busy-parents.png";
import passwordGenerator from "../../assets/images/password_generator.png";
import workDayScheduler from "../../assets/images/work-day-scheduler.png";
import weatherDashboard from "../../assets/images/weather-dashboard.png";
import codeQuiz from "../../assets/images/code-quiz-pic.png";

export default function ProjectsPage() {
  return (
    <div className="portfolio-container">
      <Project
        name="Bitcoin Tracker"
        projectImage={bitcoinTracker}
        liveLink="https://phoenix-staley.github.io/cryptocurrency_tracker/"
        repoLink="https://github.com/Phoenix-Staley/cryptocurrency_tracker"
        className="work-item"
      />
      <Project
        name="Busy Parent"
        projectImage={busyParents}
        liveLink="https://busy-parents-jesse.herokuapp.com/"
        repoLink="https://github.com/crumwj22/busy-parents"
        className="work-item"
      />
      <Project
        name="Password Generator"
        projectImage={passwordGenerator}
        liveLink="https://crumwj22.github.io/password-generator/"
        repoLink="https://github.com/crumwj22/password-generator"
        className="work-item"
      />
      <Project
        name="Work Day Scheduler"
        projectImage={workDayScheduler}
        liveLink="https://crumwj22.github.io/work-day-scheduler/"
        repoLink="https://github.com/crumwj22/work-day-scheduler"
        className="work-item"
      />
      <Project
        name="Weather Dashboard"
        projectImage={weatherDashboard}
        liveLink="https://crumwj22.github.io/weather-dashboard/"
        repoLink="https://github.com/crumwj22/weather-dashboard"
        className="work-item"
      />
      <Project
        name="Code Quiz"
        projectImage={codeQuiz}
        liveLink="https://crumwj22.github.io/code-quiz/"
        repoLink="https://github.com/crumwj22/code-quiz"
        className="work-item"
      />
    </div>
  );
}
