import gameImage from "../images/bkground-gaming.png";
const Home = () => {
  return (
    <div
      className="ui container center aligned "
      style={{
        backgroundImage: `url(${gameImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 700,
        width: 1200,
      }}
    >
      <div style={{ margin: "0 auto" }}>
        <h1 className="ui center aligned " style={{ padding: 100 }}>
          Adding Games Info
          <div className="sub header">
            Manage games Info, and please enter all the details.
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
