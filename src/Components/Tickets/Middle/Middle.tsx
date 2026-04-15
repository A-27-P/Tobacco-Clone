import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ticket from "../../../assets/ticket.png";
import "./Middle.css";

gsap.registerPlugin(ScrollTrigger);

export default function Middle() {
  const contRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || !contRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contRef.current,
        {
          scale: 1.6,
          transformOrigin: "center center",
        },
        {
          scale: 1.1,
          scrollTrigger: {
            trigger: ".mid-cont",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        },
      );

      gsap.fromTo(
        imgRef.current,
        {
          filter: "brightness(0.3)",
        },
        {
          filter: "brightness(0.85)",
          scrollTrigger: {
            trigger: ".mid-cont",
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mid-cont">
      <div
        ref={contRef}
        className="mid-img-wrapper"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img ref={imgRef} src={ticket} alt="" />
      </div>

      <div className="mid-overlay">
        <div className="mid-text-content">
          <h1 className="mid-title">
            ALSO ON STAGE AT
            <br />
            TOBACCO?
          </h1>
          <p className="mid-desc">
            Our theater programming is open to surprising, emerging
            <br />
            cultural initiatives. Get in touch with the most atmospheric
            <br />
            theater in Amsterdam. We're more than happy to brainstorm
            <br />
            with you!
          </p>
          <button className="mid-btn">GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}
