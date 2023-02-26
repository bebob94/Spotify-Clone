import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  CARD_SELECTED,
  GET_CARDS_ERROR,
  IS_LOADING_OFF,
} from "../redux/action/ActionIndex";
import IsLoading from "./IsLoading";
import Error from "./Error";
import { Link } from "react-router-dom";

const SearchResaults = () => {
  const searchResult = useSelector((state) => state.cardData.searchResult);
  const hasError = useSelector((state) => state.cardData.hasError);
  const isLoading = useSelector((state) => state.cardData.isLoading);

  const dispatch = useDispatch();

  const [songs, setSongs] = useState({});

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchResult}`
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
  }, [searchResult]);

  return (
    <Container xs={12} md={12} className=" offset-md-3 mainPage">
      <Row className="mb-3">
        <Col
          md={{ span: 6, offset: 1 }}
          className="mainLinks d-none d-md-flex "
        >
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

      <Row className=" mb-3">
        <Col xs={12} md={12} className="   p-0">
          <h2 className="text-white font-weight-bold mt-4">Search Results</h2>
          <h4 className="mt-4">{searchResult.toUpperCase()} </h4>

          <Row id="apiLoaded">
            {isLoading ? (
              <IsLoading />
            ) : hasError ? (
              <Error />
            ) : (
              songs?.data?.map((singl) => (
                <Col xs={4} md={4} key={singl.id} className="my-3">
                  <Link
                    to={"/Album"}
                    onClick={() => {
                      dispatch({
                        type: CARD_SELECTED,
                        payload: singl,
                      });
                    }}
                  >
                    <img src={singl.album.cover_big} alt={singl.album.title} />
                    <p className="mt-2 text-truncate ">
                      Album: {singl.album.title}
                    </p>
                  </Link>
                  <Link
                    to={"/Artist"}
                    onClick={() => {
                      dispatch({
                        type: CARD_SELECTED,
                        payload: singl,
                      });
                    }}
                  >
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
export default SearchResaults;
