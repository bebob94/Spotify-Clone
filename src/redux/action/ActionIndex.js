export const GET_POP_CARDS = "GET_POP_CARDS";
export const GET_HIPHOP_CARDS = "GET_HIPHOPCARDS";
export const GET_ROCK_CARDS = "GET_ROCK_CARDS";
export const GET_CARDS_ERROR = "GET_CARDS_ERROR";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const CARD_SELECTED = "CARD_SELECTED";
export const SEARCH_RESULT = "SEARCHRESULT";
export const PLAY_CARD = "PLAY_CARD";
export const IS_PLAY_CARD = "IS_PLAY_CARD";
export const MY_FAVORITE = "MY_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const SpotifyFetch = (endPoint) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${endPoint}`
      );
      if (response.ok) {
        let data = await response.json();
        switch (endPoint) {
          // SE L' ENDPOINT E' ROCK SPEGNIAMO IL LOADER
          case "rock":
            dispatch({
              type: IS_LOADING_OFF,
            });
            // DISPATCHIAMO SOLO L'ARRAY ROCK
            dispatch({
              type: GET_ROCK_CARDS,
              payload: data.data,
            });
            break;
          case "pop":
            // SE IL PRIMO ENDPOINT E' ROCK SPEGNIAMO IL LOADER
            dispatch({
              type: IS_LOADING_OFF,
            });
            // DISPATCHIAMO SOLO L'ARRAY POP
            dispatch({
              type: GET_POP_CARDS,
              payload: data.data,
            });
            break;
          case "hiphop":
            // SE IL PRIMO ENDPOINT E' ROCK SPEGNIAMO IL LOADER
            dispatch({
              type: IS_LOADING_OFF,
            });
            // DISPATCHIAMO SOLO L'ARRAY HIPHOP
            dispatch({
              type: GET_HIPHOP_CARDS,
              payload: data.data,
            });
            break;

          default:
            break;
        }
      } else {
        // SE LA RISPOSTA FA CAGARE
        // PRIMA COSA SPEGNIAMO IL LOADING
        dispatch({
          type: IS_LOADING_OFF,
        });
        // SECONDA COSA ROMPIAMO TUTTO
        dispatch({
          type: GET_CARDS_ERROR,
        });
      }
    } catch (error) {
      alert(error);
      // STESSI PASSAGGI SE L'ERRORE ARRIVA DAL CATCH,
      //  SPEGNIAMO IL LOADING E PREGHIAMO
      dispatch({
        type: IS_LOADING_OFF,
      });
      // ROMPIAMO TUTTO
      dispatch({
        type: GET_CARDS_ERROR,
      });
    }
  };
};
