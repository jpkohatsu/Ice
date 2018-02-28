import React from 'react';

export default function Event(props) {
    return (
        <div className="card">
            <img className="card-img-top" src={props.image} alt="Card cap" />
            <div className="card-block">
                <p className="card-text">{props.eventDate}</p>
                <p className="card-text">{props.eventTitle}</p>
                <p className="card-text">{props.eventLocation}</p>
            </div>
        </div>
    );
}
