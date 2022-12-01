import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import useTitle from '../../Hooks/useTitle';


const CheckReview = () => {
    useTitle('Check Reviews')
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`https://service-review-server-ashen.vercel.app/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [user.email])

    return (
        <div className='mt-5 mb-20'>
        <h3 className="text-4xl m-5 my-5">Reviews</h3>
        <div className="overflow-x-auto mt-2 mb-10">
        <table className="table w-full my-5">
        <thead>
        <tr>
            <th></th>
            <th>Sevice Name</th>
            <th>Review</th>
        </tr>
        </thead>
        <tbody>
        {
            reviews.map((review, i) =><tr key={i}>
            <th>{i+1}</th>
            <td>{review.serviceName}</td>
            <td>{review.review} </td>
         </tr>
            
            )
        }
        </tbody>
    </table>
        </div>
        </div>
    );
};

export default CheckReview;