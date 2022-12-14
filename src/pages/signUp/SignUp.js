import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthPrivider';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up');
    const {createUser} = useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            toast.success(`${user.email} Signed up Successful`);
        })
        .catch(err => {
            toast.error(`${err}`)
        });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-3/4 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register !!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <p>Already registered ? <Link to='/login' className="label-text-alt link link-hover">Sign in</Link></p>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary font-bold" type="submit" value="Register" />
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;