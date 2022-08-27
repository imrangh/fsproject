import { API, graphqlOperation } from "aws-amplify";

import { listGames } from "../graphql/queries";
import { createGame } from "../graphql/mutations";

export const getGames = () => {
  return async (dispatch) => {
    try {
      const gameData = await API.graphql(graphqlOperation(listGames));
      // const user = await Auth.currentAuthenticatedUser();
      // console.log("user:", user);
      // console.log("user info:", user.signInUserSession.idToken.payload);
      console.log("gameData: ", gameData);
      //setGames(gameData.data.listGames.items);
      dispatch(setGames(gameData.data.listGames.items));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createGames = (game) => {
  console.log("game in createGames: ---", game);
  return async (dispatch) => {
    try {
      await API.graphql(graphqlOperation(createGame, { input: game }));
      console.log("item created!");
      //dispatch(setInputs(game));
      dispatch(getGames());
    } catch (err) {
      console.log("error creating game...", err);
    }
  };
};

export const setGames = (games) => {
  return {
    type: "SET_GAMES",
    games,
  };
};

export const setInputs = (games) => {
  return {
    type: "SET_INPUTS",
    games,
  };
};

export const clearInputs = (games = []) => {
  return {
    type: "CLEAR_INPUTS",
    games,
  };
};
