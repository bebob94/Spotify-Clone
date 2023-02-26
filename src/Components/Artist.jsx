import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  GET_CARDS_ERROR,
  IS_LOADING_OFF,
  IS_PLAY_CARD,
  PLAY_CARD,
} from "../redux/action/ActionIndex";
import IsLoading from "./IsLoading";
import Error from "./Error";
import { Link } from "react-router-dom";

const Artist = () => {
  const selectedCard = useSelector((state) => state.cardData.selectedCard);

  const hasError = useSelector((state) => state.cardData.hasError);
  const isLoading = useSelector((state) => state.cardData.isLoading);

  const dispatch = useDispatch();

  const [songs, setSongs] = useState({});

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${selectedCard.artist.name}`
        );
        if (response.ok) {
          let data = await response.json();
          setSongs(data);
          console.log(data);
          dispatch({
            type: IS_LOADING_OFF,
          });
          console.log(songs);
        } else {
          dispatch({
            type: IS_LOADING_OFF,
          });
          dispatch({
            type: GET_CARDS_ERROR,
          });
        }
      } catch (error) {
        dispatch({
          type: IS_LOADING_OFF,
        });
        dispatch({
          type: GET_CARDS_ERROR,
        });
      }
    };
    fetchArtist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container xs={12} md={12} className=" offset-md-3 mainPage">
      <Row className="mb-3">
        <Col className="mainLinks d-none d-md-flex ">
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
      <Row>
        <Col xs={12} md={10} className=" mt-5">
          <h2 className="titleMain">{selectedCard.artist.name}</h2>
          <div id="followers">{selectedCard.rank} Followers</div>
          <div className="d-flex justify-content-center" id="button-container">
            <button
              className="btn btn-success mr-2 mainButton "
              id="playButton"
              onClick={() => {
                dispatch({
                  type: PLAY_CARD,
                  payload: selectedCard,
                });
                dispatch({
                  type: IS_PLAY_CARD,
                  payload: true,
                });
              }}
            >
              PLAY
            </button>
            <button
              className="btn btn-outline-light mainButton "
              id="followButton"
            >
              FOLLOW
            </button>
          </div>
        </Col>
      </Row>
      <Row className=" mb-3">
        <Col xs={12} md={12} className="   p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <Row id="apiLoaded">
            {isLoading ? (
              <IsLoading />
            ) : hasError ? (
              <Error />
            ) : (
              songs?.data?.map((singl) => (
                <Col xs={4} md={4} key={singl.id} className="my-3">
                  <Link to={"/Album"}>
                    <img src={singl.album.cover_big} alt={singl.album.title} />
                    <p className="mt-2 text-truncate ">
                      Album: {singl.album.title}
                    </p>
                  </Link>
                  <Link to={"/Artist"}>
                    <p>Artist: {singl.artist.name}</p>
                  </Link>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Artist;
