import React from 'react';
import img1 from './sliderImage/img1.jpg';
import img2 from './sliderImage/img2.jpg';
import img3 from './sliderImage/img3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div className="carousel mx-auto mt-8 w-4/5 carousel-center rounded-box">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='slider-image'>
                    <img src={img1} alt="" className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-20 md:top-1/4">
                    <h1 className='text-2xl md:text-6xl font-semibold md:font-bold text-white'> 
                        Best Photographer <br/>
                        In your <br />
                        Budget
                    </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-3/4 md:top-1/2">
                    <p className='text-xs md:text-xl text-white'>You can recruit photographer from us</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-xl mr-1 md:mr-5">❮</a> 
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-xl mr-0 md:mr-4">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <div className='slider-image'>
                    <img src={img2} alt="" className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-20 md:top-1/4">
                    <h1 className='text-2xl md:text-6xl font-semibold md:font-bold text-white'> 
                        Best Photographer <br/>
                        In your <br />
                        Budget
                    </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-3/4 md:top-1/2">
                    <p className='text-xs md:text-xl text-white'>You can recruit photographer from us</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-xl mr-1 md:mr-5">❮</a> 
                    <a href="#slide3" className="btn btn-circle btn-xs md:btn-xl mr-0 md:mr-4">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <div className='slider-image'>
                    <img src={img3} alt="" className="w-full" />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-20 md:top-1/4">
                    <h1 className='text-2xl md:text-6xl font-semibold md:font-bold text-white'> 
                        Best Photographer <br/>
                        In your <br />
                        Budget
                    </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 md:left-24 top-3/4 md:top-1/2">
                    <p className='text-xs md:text-xl text-white'>You can recruit photographer from us</p>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle btn-xs md:btn-xl mr-1 md:mr-5">❮</a> 
                    <a href="#slide1" className="btn btn-circle btn-xs md:btn-xl mr-0 md:mr-4">❯</a>
                    </div>
                </div> 
                </div>
            </div>
    );
};

export default Slider;