import React, { useEffect, useState } from 'react';
import AllService from './AllService';
import useTitle from '../../Hooks/useTitle';

const AllServices = () => {
    useTitle('Our Services')
    const [allServices, setAllServices] = useState([]);

    useEffect(() =>{
        fetch('https://service-review-server-ashen.vercel.app/services')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])

    return (
        <div>
            <div className="text-center my-8">
                <h2 className="text-5xl font-semibold">Our Services</h2>
                {}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    allServices.map(allService => <AllService
                    key={allService._id}
                    allService={allService}
                    ></AllService>)
                }
            </div>
        </div>
    );
};

export default AllServices;