import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          I have extensive experience in <b className="purple">mobile application development </b>using <b className="purple">Flutter </b>, including integrating <b className="purple">Firebase </b> and machine learning algorithms from <b className="purple">API </b>. I also have a background in <b className="purple">video and photo editing </b>, having worked for a YouTube channel as a thumbnail and video editor.          <br/>          <br/>

          Currently, I am working on a fantasy app <b className="purple">startup </b>, and I'm always eager to collaborate on new projects. As the <b className="purple">Vice President </b> of the <b className="purple">AMC FOSS Club </b> in my college, I am dedicated to staying up-to-date with the latest developments in the tech world and contributing to the open-source community.          <br/>Over the years, I have participated in various <b className="purple">hackathons</b> , <b className="purple">workshops</b> , and a <b className="purple">start-up expo</b> , where I have achieved badges and expanded my knowledge of different technologies. 
          <br/>
          Thank you for visiting my portfolio, and I'm excited to share my skills and experiences with you!"                   <br/>
 <br/>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
