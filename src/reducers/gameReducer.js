const intialState = {
  name: "",
  description: "",
  gameName: "",
  gameInfo: "",
  games: [],
};

const gameReducer = (state = [], action) => {
  console.log(">>>>>>>>>>>>>>>>>>>", state);
  switch (action.type) {
    case "SET_GAMES":
      //return { ...state, games: action.games };
      return { ...state, games: action.games };
    case "SET_INPUTS":
      return { ...state, [action.key]: action.value };
    case "CLEAR_INPUTS":
      return { ...intialState, games: state.games };

    default:
      return state;
  }
};

export default gameReducer;
