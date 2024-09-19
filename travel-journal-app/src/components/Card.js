import React from "react";

export default function Card({ image, country, googleMaps, place, dateFrom, dateTo, description }) {
    return (
        <div className="card">
            <div className="card-img-box">
                <img src={image} alt={`Scenic view of ${place}`} className="card-image" />
            </div>
            <div className="card-info">
                <div className="card-location-info">
                    <img src="/images/location.png" className="card-location-icon" alt="location icon" />
                    <h2 className="card-location">{country}</h2>
                    <a className="card-location-url" href={googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h3 className="card-title">{place}</h3>
                <p className="card-date">{dateFrom} - {dateTo}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}