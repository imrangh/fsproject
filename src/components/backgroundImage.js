import gameImage from "../images/bkground-gaming.png";
const BackgroundImage = (props) => {
  return (
    <div
      className="ui container "
      style={{
        backgroundImage: `url(${gameImage})`,
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 800,
        width: 1200,
      }}
    >
      {/* <div style={{ marginTop: 50 }}>
        <h1 className="ui center aligned " style={{ padding: 100 }}>
          Adding Games Info
          <div className="sub header">
            Manage games Info, and please enter all the details.
          </div>
        </h1>
      </div> */}
      <div>{props.children}</div>
    </div>
  );
};

export default BackgroundImage;
