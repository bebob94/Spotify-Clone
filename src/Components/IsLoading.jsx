import { Container, Spinner } from "react-bootstrap";

const IsLoading = () => {
  return (
    <Container>
      <Spinner animation="grow" variant="dark" />
    </Container>
  );
};
export default IsLoading;
