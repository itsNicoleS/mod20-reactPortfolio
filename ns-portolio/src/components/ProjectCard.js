import { Col } from "react-bootstrap";

export default function Pcard({ title, description, imgUrl }) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">

                <img src={imgUrl} />

                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span> {description} </span>

                </div>
            </div>
        </Col>
    )
}