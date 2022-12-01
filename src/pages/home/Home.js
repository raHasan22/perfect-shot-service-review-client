import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Services from './serviceHome/Services';
import Slider from './Slider';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
        </div>
    );
};

export default Home;