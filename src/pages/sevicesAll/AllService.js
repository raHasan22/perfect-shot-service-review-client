import React from 'react';

const AllService = ({allService}) => {

    const {name, image, detail, rating} = allService;
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
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default AllService;