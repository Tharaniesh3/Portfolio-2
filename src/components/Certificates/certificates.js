import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./certificatecards";
import Particle from "../Particle";
import buildwithai from "../../Assets/Certificates/buildwithai.png";
import flutter from "../../Assets/Certificates/Flutter.png";
import machinelearning from "../../Assets/Certificates/machinelearning.png";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Certificates <strong className="purple"> </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={machinelearning}
              isBlog={false}
              title="Machine Learning"
              description="I am thrilled to have completed a workshop in machine learning at IIT Madras on January 26th. The experience was truly enlightening as I revised various concepts and was introduced to new techniques in the field of machine learning. It was a great opportunity to learn from the experts at IIT Madras and I'm grateful for the chance to attend. I'm excited to apply the skills I've acquired to my current and future projects. Thanks to IIT Madras for organizing such an amazing workshop! #MachineLearning #IITMadras #LearningOpportunities"
              // ghLink="https://github.com/Tharaniesh3/To-Do-List"
              // demoLink="https://tharaniesh3.github.io/To-Do-List/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Flutter course"
              description="I am really happy to share that I have successfully completed introduction to flutter course by simplilearn.The key takeaway from this course is that I have learned about dart language,implementation on how to use widgets,JSON and Navigations from one page to other page.And i have also created a quote generator app by using api during this course."
              // ghLink="https://github.com/Tharaniesh3/To-Do-List"
              // demoLink="https://tharaniesh3.github.io/To-Do-List/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buildwithai}
              isBlog={false}
              title="#BuildWithAI2021"
              description="I participated in the #buildwithai hackathon 2021 held in October 2021. we made a project related to object oriendtation programming. Although we couldn't win the hackathon we learned many new things."
              // ghLink="https://github.com/Tharaniesh3/To-Do-List"
              // demoLink="https://tharaniesh3.github.io/To-Do-List/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
