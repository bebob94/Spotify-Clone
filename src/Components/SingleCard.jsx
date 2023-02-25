import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CARD_SELECTED } from "../redux/action/ActionIndex";

const SingleCard = ({ singCrd }) => {
  const dispatch = useDispatch();
  return (
    <Col xs={4}>
      <Link
        to={`/Album/`}
        onClick={() => {
          dispatch({
            type: CARD_SELECTED,
            payload: singCrd,
          });
        }}
      >
        <img
          src={singCrd.album.cover}
          alt={singCrd.title}
          style={{ height: "200px" }}
        />
        <p className="text-truncate mt-2">{singCrd.title}</p>
      </Link>
      <Link
        to={"/Artist"}
        onClick={() => {
          dispatch({
            type: CARD_SELECTED,
            payload: singCrd,
          });
        }}
      >
        <p>{singCrd.artist.name}</p>
      </Link>
    </Col>
  );
};

export default SingleCard;
