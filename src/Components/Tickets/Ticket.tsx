import Curtain from "../../common/curtain";
import Middle from "./Middle/Middle";
import Upper from "./Upper/Upper";
import "./Ticket.css";
import Bottom from "./bottom/Bottom";

export default function Ticket() {
  return (
    <div className="ticket-container">
      <Curtain key="ticket" />
      <div className="ticket-upper">
        <Upper />
      </div>

      <div className="ticket-middle">
        <Middle />
      </div>
      <div className="ticket-lower">
        <Bottom />
      </div>
    </div>
  );
}
