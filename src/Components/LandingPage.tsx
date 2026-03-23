import Upper from "./upper/upper";
import Curtain from "../common/curtain";

const LandingPage = () => {
  return (
    <div>
      <Curtain />
      <div className="upper">
        <Upper />
      </div>
      <div className="midle"></div>
      <div className="lower"></div>
    </div>
  );
};

export default LandingPage;
