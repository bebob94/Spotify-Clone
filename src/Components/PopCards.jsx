import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpotifyFetch } from "../redux/action/ActionIndex";
import Error from "./Error";
import IsLoading from "./IsLoading";
import SingleCard from "./SingleCard";

const RockCards = ({ endPoint }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cardData.cards.pop);

  const hasError = useSelector((state) => state.cardData.hasError);
  const isLoading = useSelector((state) => state.cardData.isLoading);

  useEffect(() => {
    dispatch(SpotifyFetch(endPoint));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : hasError ? (
        <Error />
      ) : (
        cards
          .slice(0, 4)
          .map((singl) => <SingleCard key={singl.id} singCrd={singl} />)
      )}
    </>
  );
};
export default RockCards;
