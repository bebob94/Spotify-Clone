import { Container, Row, Col } from "react-bootstrap";
import HiphopCards from "./HiphopCards";
import PopCards from "./PopCards";
import RockCards from "./RocksCards";

const AllCards = () => {
  return (
    <Container fluid className="mainPage offset-md-3">
      <Row>
        <Col md={{ span: 6, offset: 1 }} className="mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              <RockCards endPoint={"rock"} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              <PopCards endPoint={"pop"} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {" "}
              <HiphopCards endPoint={"hiphop"} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllCards;
