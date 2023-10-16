import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Pcard from "./ProjectCard"; // Import the ProjectCard component
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
// import TrackVisibility from 'react-on-screen';

const projImg1 = require("../assets/img/project-img1.png");
const projImg2 = require("../assets/img/project-img2.png");
const projImg3 = require("../assets/img/project-img3.png");

export function Projects () {
    const projects = [
        {
            title: "Business Startup 1",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup 2",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup 3",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <Col key={index} md={4}>
                                                <Pcard {...project} />
                                            </Col>
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};
