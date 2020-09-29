import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Textarea,
  TextInput,
} from "react-materialize";
import useFirestore from "../../hooks/useFirestore";
import useStorage from "../../hooks/useStorage";
import Upload from "../Upload";
import { auth } from "../../firebase/config";

const Admin = () => {
  const { docs } = useFirestore("projects");

  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState("");
  const [fileInfo, setFileInfo] = useState(null);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState({});
  const [form, setForm] = useState({
    title: "",
    technologies: [],
    role: "",
    difficulties: "",
    solutions: "",
  });

  const { url } = useStorage(file, form);
  useEffect(() => {
    if (url) {
      setFileInfo(null);
    }
  }, [url, setFileInfo]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value });
  };

  const projectForm = document.getElementById("project-form");

  const handleClick = (e) => {
    e.preventDefault();
    setForm({
      title: info.title,
      description: info.description,
      webLink: info.webLink,
      github: info.github,
      technologies: technologies,
      role: info.role,
      difficulties: info.difficulties,
      solutions: info.solutions,
    });
    setFile(fileInfo);
    projectForm.reset();
    setTechnologies([]);
  };

  const handleNewTechnology = (e) => {
    const { value } = e.target;

    setTechnology(value);
  };

  const addTechnology = (e) => {
    e.preventDefault();
    if (technology) {
      setTechnologies([...technologies, technology]);
      setTechnology("");
    }
  };

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  console.log(docs);

  return (
    <Container>
      <Row>
        <Col s={12} className="center contact-form">
          <Row>
            <Col>
              <Button onClick={logout}>Sign Out</Button>
            </Col>
          </Row>
          <form
            className="col s12 center"
            id="project-form"
            onChange={handleFormChange}
          >
            <Row>
              <Col s={12}>
                <TextInput s={12} label="Title" name="title" type="text" />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Textarea name="description" label="Decription" s={12} />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <TextInput
                  s={12}
                  label="Web Address"
                  name="webLink"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <TextInput s={12} label="GitHub" name="github" type="text" />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={6}>
                <Upload setFileInfo={setFileInfo} />
              </Col>
              <Col s={12} m={6}>
                <Row>
                  <Col s={12}>
                    <TextInput
                      onChange={handleNewTechnology}
                      s={8}
                      label="Technologies Used"
                      type="text"
                    />
                    <Button onClick={addTechnology}>Add</Button>
                  </Col>
                </Row>
                <Row>
                  <Col s={12}>
                    <ul className="left">
                      {technologies &&
                        technologies.map((res, i) => <li key={i}>{res}</li>)}
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Textarea s={12} name="role" label="My Role" />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Textarea
                  s={12}
                  name="difficulties"
                  label="Project Difficulties"
                />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <Textarea s={12} name="solutions" label="Solutions" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick}>Add Project</Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
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
    </Container>
  );
};

export default Admin;
