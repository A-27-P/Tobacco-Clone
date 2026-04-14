import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Upper.css";
import cardImage from "../../../assets/cardimage.png";
import img15 from "../../../assets/img15.png";
import img11 from "../../../assets/img11-negro.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Upper() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.querySelectorAll(".wave-char");

    gsap.fromTo(
      chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    const dividers = document.querySelectorAll(".divider-line");
    dividers.forEach((divider) => {
      gsap.fromTo(
        divider,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divider,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    const cards = document.querySelectorAll(".card-anim-container");
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 0.8, opacity: 0 },

        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, []);

  const titleText = "WHAT'S ON";

  return (
    <div className="upper-container">
      <div className="upper-content">
        <h1 className="main-title" ref={titleRef}>
          {titleText.split("").map((char, index) => (
            <span
              key={index}
              className="wave-char"
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <h2 className="date-subtitle">APRIL 2026</h2>
        <div className="divider-line"></div>
        <div className="card-anim-container">
          <div className="card-wrapper">
            <img src={cardImage} alt="Sticker" className="sticker-img" />
            <div className="card-badge">SAT 25 APR</div>
          </div>
        </div>
        <h3 className="card-title">
          <strong>TOBACCO LIVE 11</strong>
          <em>&nbsp;- TOS & Illnoledge</em>
        </h3>

        <h2 className="date-subtitle">MAY 2026</h2>
        <div className="divider-line"></div>
        <div className="card-anim-container">
          <div className="card-wrapper">
            <img src={img15} alt="Sticker" className="sticker-img" />
            <div className="card-badge">SAT 9 MAY</div>
          </div>
        </div>
        <h3 className="card-title">
          <strong>DIAMONDS ARE FOREVER</strong>
        </h3>

        <h2 className="date-subtitle">JUNE 2026</h2>
        <div className="divider-line"></div>
        <div className="card-anim-container">
          <div className="card-wrapper">
            <img src={img11} alt="Sticker" className="sticker-img" />
            <div className="card-badge">FRI 5 JUN</div>
          </div>
        </div>
        <h3 className="card-title">
          <strong>Red Light Jazz </strong>
          <em>&nbsp;- Sabrina Starke</em>
        </h3>
      </div>
    </div>
  );
}
