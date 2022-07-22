import React from "react";
import Project from "../Project";
import busyParents from "../../assets/images/busy-parents.png";

export default function Blog() {
  return (
    <div>
      <Project
        name="Busy Parent"
        projectImage={busyParents}
        liveLink="https://www.google.com"
        repoLink="https://github.com"
      />
    </div>
  );
}
