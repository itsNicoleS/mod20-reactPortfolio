import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Container, Row, Col } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const skillRide = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
></Carousel>

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>

                            <p> Having had some time at my disposal when in London, I had visited the
                                British Museum, and made search among the books and maps in the library
                                regarding Transylvania; it had struck me that some foreknowledge of the
                                country could hardly fail to have some importance in dealing with a nobleman
                                of that country. I find that the district he named is in the extreme east of
                                the country, just on the borders of three states, Transylvania, Moldavia and
                                Bukovina, in the midst of the Carpathian mountains; one of the wildest and
                                least known portions of Europe. I was not able to light on any map or work
                                giving the exact locality of the Castle Dracula, as there are no maps of
                                this country as yet to compare with our own Ordnance Survey maps; but I
                                found that Bistritz, the post town named by Count Dracula, is a fairly
                                well-known place. I shall enter here some of my notes, as they may
                                refresh my memory when I talk over my travels with Mina.</p>


                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item1">
                                    <img src={meter1} alt=" "> </img>
                                    <h5> Web Development </h5>
                                </div>
                                <div className="item2">
                                    <img src={meter2} alt=" "> </img>
                                    <h5> Brand Identity </h5>
                                </div>
                                <div className="item3">
                                    <img src={meter3} alt=" "> </img>
                                    <h5> Logo Design </h5>
                                </div>
                                <div className="item3">
                                    <img src={meter1} alt=" "> </img>
                                    <h5> Logo Design </h5>
                                </div>
                            </Carousel>


                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}