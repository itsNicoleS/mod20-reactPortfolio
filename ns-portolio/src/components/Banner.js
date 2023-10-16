import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
// import header-img from "./assets/img/header-img.svg";
import { useState, useEffect } from 'react';

export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["React Master", "Hot Mess", "Code Copier"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta, loopNum, isDeleting]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="open">Welcome to my Page</span>
                        <h1> {`Hi I'm Nicole V. Smith `}
                        <br></br>
                        <span className="wrap"> {text} </span></h1>
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
                        <button onClick={() => console.log("connect")}> Let's Connect 
                        <ArrowRightCircle size={25} />
                    
                        </button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={'assets\img\header-img.svg'} alt="Header Img" /> */}
                    </Col>

                </Row>
            </Container>

        </section>
    )

}