import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { GET_CARDS_ERROR, IS_LOADING_OFF } from "../redux/action/ActionIndex";
import IsLoading from "./IsLoading";
import Error from "./Error";
import { Link } from "react-router-dom";

const Album = () => {
  const selectedCard = useSelector((state) => state.cardData.selectedCard);

  const hasError = useSelector((state) => state.cardData.hasError);
  const isLoading = useSelector((state) => state.cardData.isLoading);

  const dispatch = useDispatch();

  const [songs, setSongs] = useState({});

  function formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/album/${selectedCard.album.id}`
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
    fetchAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="mb-3">
        <Col md={{ span: 6, offset: 1 }} className="mainLinks d-none d-md-flex">
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
        <Col xs={3} className=" pt-5 text-center" id="img-container">
          <img
            src={selectedCard.album.cover_medium}
            alt={selectedCard.album.title_short}
          />

          <p className="text-truncate mt-4">{selectedCard.album.title} </p>
          <Link to={"/Artist"}>
            <p className="text-truncate mt-2">{selectedCard.artist.name} </p>
          </Link>
        </Col>
        <Col xs={8} className=" p-5">
          {isLoading ? (
            <IsLoading />
          ) : hasError ? (
            <Error />
          ) : (
            songs?.tracks?.data?.map((singl) => (
              <Row key={singl.id} className="mt-5">
                <Col xs={10}>{singl.title}</Col>
                <Col xs={2}>{formatDuration(singl.duration)}</Col>
              </Row>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Album;
