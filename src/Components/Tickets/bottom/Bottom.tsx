import Footer from "../../Home/Footer/Footer";
import "./Bottom.css";
import gsap from "gsap";

export default function Bottom() {
  gsap.fromTo(
    "divider-line",
    { scaleX: 0, transformOrigin: "left center" },
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "divider-line",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    },
  );

  return (
    <div className="bottom-back">
      <div className="bottom-back-cont">
        <div className="bottom-col">
          <h2 className="col-italic">Culture</h2>
          <h1 className="col-title">COMMERCE</h1>
          <p className="col-desc">
            With commercial revenue, we make art and <br /> culture possible and
            accessible.
          </p>
        </div>

        <div className="bottom-col">
          <h2 className="col-italic">Versatile</h2>
          <h1 className="col-title">SPACES</h1>
          <p className="col-desc">
            From intimate gatherings to large-scale events, <br /> the rooms
            adapt perfectly.
          </p>
        </div>

        <div className="bottom-col">
          <h2 className="col-italic">Central</h2>
          <h1 className="col-title">LOCATION</h1>
          <p className="col-desc">
            With the beautiful Amsterdam city center as the <br /> backdrop.
          </p>
        </div>
      </div>
      <div className="divider-line"></div>
      <Footer />
    </div>
  );
}
