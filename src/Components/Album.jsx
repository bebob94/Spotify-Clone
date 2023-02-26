import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  GET_CARDS_ERROR,
  IS_LOADING_OFF,
  IS_PLAY_CARD,
  MY_FAVORITE,
  PLAY_CARD,
} from "../redux/action/ActionIndex";
import IsLoading from "./IsLoading";
import Error from "./Error";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";

const Album = () => {
  const selectedCard = useSelector((state) => state.cardData.selectedCard);

  const hasError = useSelector((state) => state.cardData.hasError);
  const isLoading = useSelector((state) => state.cardData.isLoading);

  const dispatch = useDispatch();

  const [songs, setSongs] = useState([]);

  const [isFavorite, setIsFavorite] = useState(
    songs?.length > 0 ? songs.length.fill(false) : []
  );

  const changeStar = (i) => {
    setIsFavorite((prevState) => {
      const newFavorite = [...prevState];
      newFavorite[i] = !newFavorite[i];
      return newFavorite;
    });
  };
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

      <Row>
        <Col xs={3} className=" pt-5 text-center" id="img-container">
          <img
            src={selectedCard.album.cover_medium}
            alt={selectedCard.album.title_short}
          />

          <h3 className="text-truncate mt-4">{selectedCard.album.title} </h3>
          <Link to={"/Artist"}>
            <p className="text-truncate mt-2">{selectedCard.artist.name} </p>
          </Link>
          <div className="mt-4 text-center">
            <button
              id="btnPlay"
              className="btn btn-success"
              type="button"
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
              Play
            </button>
          </div>
        </Col>
        <Col xs={8} className=" p-5">
          {isLoading ? (
            <IsLoading />
          ) : hasError ? (
            <Error />
          ) : (
            songs?.tracks?.data?.map((singl, i) => (
              <Row key={singl.id} className="mt-5">
                <Col xs={5}>{singl.title}</Col>
                <Col xs={6}>
                  <BiStar
                    style={{
                      fontSize: "1.2em",
                      color: isFavorite?.[i] ? "green" : "inherit",
                    }}
                    onClick={() => {
                      dispatch({
                        type: MY_FAVORITE,
                        payload: singl,
                      });
                      changeStar(i);
                    }}
                  />
                </Col>
                <Col xs={1}>{formatDuration(singl.duration)}</Col>
              </Row>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Album;
