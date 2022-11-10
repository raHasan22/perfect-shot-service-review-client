import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthPrivider';

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleLogin = event =>{
        const email =  event.target.email.value;
        const password = event.target.password.value;
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .then(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-4/5 flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <p>Don't have a account <Link to='/signup' className="label-text-alt link link-hover">Sign Up</Link></p>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-primary font-bold" type="submit" value="Login" />
                        </div>
                    </form>
                    </div>
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    
                </div>
                </div>
        </div>
    );
};

export default Login;