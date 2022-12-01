import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import useTitle from '../../Hooks/useTitle';
import toast from 'react-hot-toast';


const AddReview = () => {
    useTitle('Post review')
    const {user} = useContext(AuthContext);

    const handleAddReview = event =>{
        event.preventDefault();
        const form = event.target;
        const serviceName= event.target.serviceName.value;
        const email= event.target.email.value;
        const review= event.target.review.value;
        const userReview = {serviceName, email, review}
        console.log(userReview);
        fetch('https://service-review-server-ashen.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userReview)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               if(data.acknowledged){
                form.reset();
                toast.success('Added Successfully');
               }
            })
    }

    return (
        <div className='w-full lg:w-1/2 mx-auto sm:px-5 my-10'>
        <div>
            <h1 className="text-4xl text-center my-5">Post Your review about our Service</h1>
        </div>
        <form className='w-full lg:w-1/2 mx-auto' onSubmit={handleAddReview}>
        <input name="serviceName" type="text" placeholder="Service Name" className="input input-bordered input-primary w-full mb-4 mt-5" required/>
        <input name="email" type="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered input-primary w-full mb-4" required />
        <input name="review" type="text" placeholder="your review" className="input input-bordered input-primary w-full mb-4" required />
        <input className="btn btn-primary w-full mb-5" type="submit" value="Submit" />

        </form>
    </div>
    );
};

export default AddReview;