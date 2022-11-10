import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServiceDetail = () => {
    const service = useLoaderData();
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={service.image} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">{service.name}</h1>
                <p className="py-6">{service.description}</p>
                <button className="btn btn-primary"><Link to='/login'>Recruit Photographer</Link></button>
                </div>
            </div>
            </div> 
        </div>
    );
};

export default ServiceDetail;