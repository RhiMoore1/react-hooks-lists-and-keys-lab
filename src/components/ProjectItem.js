import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(name);
  console.log(about);
  console.log(technologies);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology) => {
          return (
            <div key={technology}>
              <span>{technology}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectItem;
