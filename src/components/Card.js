import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function Card(props) {
  return (
    <div className="card--container">
      <section className="image--container">
        <img src={props.imageUrl} alt="mountain" />
      </section>
      <section className="details--container">
        <div className="details--container__top">
            <HiLocationMarker className="icon"/>
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </section>
    </div>
  );
}
