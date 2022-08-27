import React, { useEffect } from "react";
import { connect } from "react-redux";
//import { withAuthenticator } from "@aws-amplify/ui-react";
import { getGames } from "../actions/gameActions";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";

const ListGames = ({ games, dispatch }) => {
  //console.log("---games-- ", games.games);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className="ui fixed table">
      <Table className="ui celled table">
        <TableHead>
          <TableRow>
            <TableCell>Game Name</TableCell>

            <TableCell>Game Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.games !== undefined &&
            games.games.map((game, index) => (
              <TableRow key={index}>
                <TableCell>{game.gameName}</TableCell>

                <TableCell>{game.gameInfo}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
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

export default connect(mapStateToProps)(ListGames);
