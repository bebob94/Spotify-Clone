import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col lg={10} className="offset-lg-2">
          <Row>
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row>
                <Link href="#">
                  <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                </Link>
                <Link href="#">
                  <img src="playerbuttons/Previous.png" alt="previous" />
                </Link>
                <Link href="#">
                  <img src="playerbuttons/Play.png" alt="play" />
                </Link>
                <Link href="#">
                  <img src="playerbuttons/Next.png" alt="next" />
                </Link>
                <Link href="#">
                  <img src="playerbuttons/Repeat.png" alt="repeat" />
                </Link>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
