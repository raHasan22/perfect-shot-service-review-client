import React from 'react';

const ServiceCard = ({service}) => {
    const {name, detail, image} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="pic" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{detail}</p>
            </div>
        </div>
    );
};

export default ServiceCard;