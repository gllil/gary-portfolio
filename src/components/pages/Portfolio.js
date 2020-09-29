import React from "react";
import useFirestore from "../../hooks/useFirestore";

function Portfolio() {
  const { docs } = useFirestore("projects");
  return (
    <div className="container">
      {docs &&
        docs.map((res) => {
          console.log(res);
          return (
            <div
              className="row center project-section grey-text text-darken-2"
              key={res.id}
            >
              <div className="col s12 m6">
                <div className="row">
                  <h4 className="proj-description-title">{res.form.title}</h4>
                  <a
                    href={res.form.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={res.url}
                      alt={res.form.title}
                      width="200"
                      className="project-image"
                    />
                  </a>
                  <p>{res.form.description}</p>
                </div>
                <div className="row">
                  <h5 className="proj-description-title">Technologies Used</h5>
                  <ul>
                    {res.form.technologies &&
                      res.form.technologies.map((results) => (
                        <li>{results}</li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col s12 m6">
                <h5 className="proj-description-title">My Role</h5>
                <p>{res.form.role}</p>
                <h5 className="proj-description-title">Project Difficulties</h5>
                <p>{res.form.difficulties}</p>
                <h5 className="proj-description-title">My Solution</h5>
                <p>{res.form.solutions}</p>
                <div>
                  <a
                    href={res.form.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-2x z-depth-3 git"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Portfolio;
