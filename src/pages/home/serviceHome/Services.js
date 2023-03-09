import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://service-review-server-ashen.vercel.app/services/three')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="text-center my-8 mx-1 md:mx-auto">
                <h2 className="text-5xl font-semibold">Our Services</h2>
                {}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-1 md:mx-auto'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center my-8'>
            <button className="btn btn-outline btn-info"><Link to='/services'>See All</Link></button>
            </div>
        </div>
    );
};

export default Services;