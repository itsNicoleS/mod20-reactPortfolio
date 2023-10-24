import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Pcard from "./ProjectCard"; // Import the ProjectCard component
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


const projImg1 = require("../assets/img/project-img1.jpg");
const projImg2 = require("../assets/img/project-img2.png");
const projImg3 = require("../assets/img/project-img3.png");

export function Projects() {
    const projects = [
        {
            title: "Eatery App",
            description: "Basic App for conditional Menu rendering. If signed in, gives access to Secret Menu. ",
            imgUrl: projImg1,
          
        },
        {
            title: "Social Whiskers App",
            description: "Pet Adoption App that also has voting. link:https://github.com/edwinalban/Social-Whiskers-Pet-Adoption",
            imgUrl: projImg2,
            
        },
        {
            title: "Travel Planner App",
            description:"Travel App featuring dollar conversions and weather https://github.com/efogerson1/Travel-Planner",
            imgUrl: projImg3,
            
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue-green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea.
                        This planet has—or rather had—a problem, which was this: most of the people living on it were unhappy for pretty much all of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movement of small green pieces of paper, which was odd because on the whole it wasn't the small green pieces of paper that were unhappy.
                        Many were increasingly of the opinion that they'd all made a big mistake in coming down from the trees in the first place. And some said that even the trees had been a bad move, and that no one should ever have left the oceans.
                        In many of the more relaxed civilizations on the Outer Eastern Rim of the Galaxy, the Hitchhiker's Guide has already supplanted the great Encyclopaedia Galactica as the standard repository of all knowledge and wisdom, for though it has many omissions and contains much that is apocryphal, or at least wildly inaccurate, it scores over the older, more pedestrian work in two important respects.
                        First, it is slightly cheaper; and secondly it has the words DON'T PANIC inscribed in large friendly letters on its cover.
                      
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background" />
        </section>
    );
};
