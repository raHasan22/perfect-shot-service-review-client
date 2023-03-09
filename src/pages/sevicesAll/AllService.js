import React from 'react';
import { Link } from 'react-router-dom';

const AllService = ({allService}) => {

    const { _id, name, image, detail, rating, price } = allService;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="photograph" /></figure>
            <div className="card-body rounded-b-xl border border-t-0 border-yellow-800">
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