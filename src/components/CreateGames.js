import React, { useState } from "react";
import { connect } from "react-redux";
//import { v4 as uuid } from "uuid";
import { createGames } from "../actions/gameActions";
//import gameReducer from "../reducers/gameReducer";
import { getGames } from "../actions/gameActions";

//const CLIENT_ID = uuid();

const CreateGames = ({ games, dispatch }) => {
  //console.log("Rendering");
  const [game, setGame] = useState({
    gameName: "",
    gameInfo: "",
  });

  const handleOnChange = (event) => {
    setGame((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleCreateGame = () => {
    const { gameInfo, gameName } = game;
    if (gameInfo === "" || gameName === "") return;

    setGame({
      ...games,

      gameInfo: gameInfo,
      gameName: gameName,
    });

    //const newGames = [...games, newGame];
    //console.log(CLIENT_ID);
    //createGames(game);
    if (games !== undefined) {
      dispatch(createGames(game));
      dispatch(getGames());
    } else {
      console.log(games);
    }

    setGame({
      gameInfo: "",
      gameName: "",
    });

    //dispatch(clearInputs());
  };

  return (
    <div>
      <div>
        <h2 className="ui center aligned icon block header">
          <i className="settings icon"></i>
          <div className="content">
            Adding Games Info
            <div className="sub header">
              Manage games Info, and please enter all the details.
            </div>
          </div>
        </h2>
      </div>
      <div className="ui content form relaxed">
        <div>
          <label
            htmlFor="gameName"
            className="left aligned"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <i className="edit icon"></i>Name of the game
          </label>

          <input
            name="gameName"
            onChange={handleOnChange}
            value={game.gameName}
            placeholder="gameName"
            className="ui input field"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          />
        </div>
        <div>
          <label
            htmlFor="gameInfo"
            className="left aligned"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            <i className="edit icon"></i>Game Info
          </label>

          <input
            name="gameInfo"
            onChange={handleOnChange}
            value={game.gameInfo}
            placeholder="gameInfo"
            className="ui input field"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          />
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <button onClick={handleCreateGame} className="ui button left aligned">
            <i className="save icon"></i> Create Game
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { games, dispatch } = state;

  return {
    games,
    dispatch,
  };
};

export default connect(mapStateToProps)(CreateGames);
