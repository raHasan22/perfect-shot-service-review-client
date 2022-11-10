import React from 'react';
import { Link } from 'react-router-dom';

const AllService = ({allService}) => {

    const { _id, name, image, detail, rating, price } = allService;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="photograph" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{rating}</div>
                </h2>
                <p>{detail}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">${price}</div> 
                <div className="badge badge-outline"><Link to={`/service/${_id}`} >Details</Link></div>
                </div>
            </div>
        </div>
    );
};

export default AllService;