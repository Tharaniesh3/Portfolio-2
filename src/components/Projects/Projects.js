import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import igclone from "../../Assets/Projects/igclone.png";
import currencybase from "../../Assets/Projects/currencybase.png";
import coffeeapp from "../../Assets/Projects/coffeeapp.png";
import multiware from "../../Assets/Projects/multiware.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multiware}
              isBlog={false}
              title="Multi Ware"
              description=" Our project integrates Firebase with machine learning for crop prediction and shelf life analysis. The algorithm is deployed in ngrok and displays detailed information to meet all MVP requirements. The team included Jaiadityan, Sree Neha, Sairam, Deependra Singh, and Sheba Sulthana."
              ghLink="https://github.com/Tharaniesh3/MultiWare"
              // demoLink="https://tharaniesh3.github.io/Walkie-Talkie/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffeeapp}
              isBlog={false}
              title="Coffeeapp"
              description="In this flutter app i have integrated firebase with flutter which displays details from firebase storage."
              ghLink="https://github.com/Tharaniesh3/Coffeeapp"
              // demoLink="https://tharaniesh3.github.io/Walkie-Talkie/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencybase}
              isBlog={false}
              title="currencybase"
              description="This is a Flutter project in which i fetched values of bitcoin and sorted it according to analytics😊."
              ghLink="https://github.com/Tharaniesh3/Currencybase"
              // demoLink="https://tharaniesh3.github.io/Walkie-Talkie/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igclone}
              isBlog={false}
              title="InstagramlClone-UI"
              description="In this project i have created exact UI and prototype of Instagram using Flutter🕺."
              ghLink="https://github.com/Tharaniesh3/InstagramlClone-UI"
              // demoLink="https://tharaniesh3.github.io/Walkie-Talkie/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Calzy"
              description="I have made a simple calculator using HTML,CSS and JAVASCRIPT
              "
              ghLink="https://github.com/Tharaniesh3/Calzy"
              demoLink="https://tharaniesh3.github.io/Calzy/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Walkie-Talkie"
              description="I have made a chat app using reactJS and socket.io."
              ghLink="https://github.com/Tharaniesh3/Walkie-Talkie"
              demoLink="https://tharaniesh3.github.io/Walkie-Talkie/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="GREENPLANET"
              description="I have made a website to raise general awareness on environmental problems."
              ghLink="https://github.com/Tharaniesh3/greenplanet"
              demoLink="https://tharaniesh3.github.io/greenplanet/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Spotify-website"
              description="I have made a 3D website for spotify using HTML, CSS and spline."
              ghLink="https://github.com/Tharaniesh3/spotify-website"
              demoLink="https://tharaniesh3.github.io/spotify-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blogsite"
              description="This is a blog website that i designed for my assignment using HTML, CSS and JAVASCRIPT."
              ghLink="https://github.com/Tharaniesh3/Blogsite"
              demoLink=" https://tharaniesh3.github.io/Blogsite/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="To-Do-List"
              description="I have made a To-Do-List web app using HTML ,CSS and JAVASCRIPT and by this to do list app you can add, delete, edit, clear tasks, see pending tasks and finished tasks."
              ghLink="https://github.com/Tharaniesh3/To-Do-List"
              demoLink="https://tharaniesh3.github.io/To-Do-List/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
