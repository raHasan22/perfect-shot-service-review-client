import React from 'react';
import useTitle from '../../Hooks/useTitle';

const About = () => {
  useTitle('About');
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://placeimg.com/260/400/arch" alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Photo and video</h1>
      <p className="py-6">Recruit Our Skilled Photographer To make Your Memories More Colorful.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;