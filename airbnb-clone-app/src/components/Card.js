import React from "react";

export default function Card(props) {

    const { coverImg, stats, location, title, price, openSpots } = props.item;
    const badgeText = openSpots === 0 ? "SOLD OUT" : location === "Online" ? "ONLINE" : "";

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`/images/${coverImg}`} className="card-image" alt={title} />
            <div className="card-stats">
                <img src="/images/star.png" className="card-star" alt="Rating star" />
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p className="card-title">{title}</p>
            <p className="card-price">
                <span className="bold">From ${price}</span> / person
            </p>
        </div>
    );
}