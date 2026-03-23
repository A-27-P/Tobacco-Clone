import Upper from "./upper/upper";
import Curtain from "../common/curtain";
import MIddle from "./MIddle/MIddle";

const LandingPage = () => {
  return (
    <div>
      <Curtain />
      <div className="upper">
        <Upper />
      </div>
      <div className="midle">
        <MIddle />
      </div>
      <div className="lower"></div>
    </div>
  );
};

export default LandingPage;
