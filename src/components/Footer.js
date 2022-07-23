import React from "react";

export default function Project(props) {
  const { name, projectImage, liveLink, repoLink } = props;

  return (
    <div href={liveLink} target="_blank">
      <img src={projectImage} alt={name}></img>
      <div>
        <div>
          <a href={liveLink} target="_blank">
            {name}
          </a>
          <a href={repoLink} target="_blank">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
