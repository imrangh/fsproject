import ListGames from "./ListGames";
import CreateGame from "./CreateGames";
const Admin = ({ games, dispatch }) => {
  return (
    <div>
      <div className="ui segments" style={{ marginTop: 50, paddingTop: 50 }}>
        <div className="ui segment">
          <div className="ui container">
            <CreateGame games={games} dispatch={dispatch} />
          </div>
        </div>
        <div className="ui secondary  segment">
          <div className="ui container">
            <ListGames games={games} dispatch={dispatch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
