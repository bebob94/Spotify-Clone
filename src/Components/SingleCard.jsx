import { Col } from "react-bootstrap";

const SingleCard = ({ singCrd }) => {
  return (
    <Col xs={4}>
      <img
        src={singCrd.album.cover}
        alt={singCrd.title}
        style={{ height: "200px" }}
      />
      <p>{singCrd.title}</p>
      <p>{singCrd.artist.name}</p>
    </Col>
  );
};

export default SingleCard;
