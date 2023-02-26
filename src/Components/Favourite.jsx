import { Container, Row, Col } from "react-bootstrap";
import { BiStar, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  IS_PLAY_CARD,
  PLAY_CARD,
  REMOVE_FROM_FAVORITE,
} from "../redux/action/ActionIndex";

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite.favourites);

  const dispatch = useDispatch();

  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mb-3">
        <Col className="mainLinks d-none d-md-flex">
          <a href="#" className="mx-2">
            TRENDING
          </a>
          <a href="#" className="mx-2">
            PODCAST
          </a>
          <a href="#" className="mx-2">
            MOODS AND GENRES
          </a>
          <a href="#" className="mx-2">
            NEW RELEASES
          </a>
          <a href="#" className="mx-2">
            DISCOVER
          </a>
        </Col>
      </Row>
      <h2 className="mt-5">I Tuoi Brani Preferiti:</h2>
      <Row className="mt-5">
        {favourite?.map((track, i) => (
          <>
            <Col key={track.id} md={1} className="mt-5 ">
              <BiTrash
                style={{
                  fontSize: "1.8em",
                  color: "green",
                }}
                className="myStar"
                onClick={() => {
                  dispatch({
                    type: REMOVE_FROM_FAVORITE,
                    payload: i,
                  });
                }}
              />
            </Col>
            <Col md={2}>
              <img
                className="mt-4"
                src={track.album.cover_medium}
                alt={track.title}
                style={{ height: "80px", width: "80px" }}
              />
            </Col>
            <Col md={6}>
              <h5 className="mt-5">{track.title}</h5>
            </Col>
            <Col md={3}>
              <button
                id="btnPlay"
                className="btn btn-success mt-4"
                type="button"
                onClick={() => {
                  dispatch({
                    type: PLAY_CARD,
                    payload: track,
                  });
                  dispatch({
                    type: IS_PLAY_CARD,
                    payload: true,
                  });
                }}
              >
                Play
              </button>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
};
export default Favourite;
