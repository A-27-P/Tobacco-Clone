import React from "react";
import "./InfoSection.css";

const events = [
  "Conference",
  "Corporate party",
  "Seminar",
  "Product presentation",
  "Dinner",
  "Award show",
  "Meeting",
  "Hybrid event",
  "Wedding",
  "Photo shoot",
];

const InfoSection = () => {
  return (
    <section className="venue-info">
      <div className="left-text">
        <p>
          Multi-day conferences, dinners, product launches, corporate parties,
          meetings, livestreams, photo shoots, exhibitions, workshops, or award
          shows. Whatever you have in mind, at TOBACCO we turn it into an
          unforgettable experience. The venue features nine distinctive, highly
          exclusive spaces. Each room is styled down to the finest detail and
          can also be rented separately if desired.
        </p>
      </div>

      <div className="v-line" />

      <div className="sidebar">
        <span className="ideal-label">IDEAL FOR</span>
        <ul className="events-list">
          {events.map((item) => (
            <li key={item} className="event-item">
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="link-3d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bekijk tobacco in 3D
        </a>
      </div>
    </section>
  );
};

export default InfoSection;
