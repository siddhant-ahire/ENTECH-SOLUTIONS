import React, { useState, useEffect } from 'react';
import TestimonialItem from './TestimonialItem';

function CustomSlider({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        setCurrentIndex(prevIndex =>
            prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex =>
            prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
        );
    };

    // Set up the interval for auto-changing testimonials
    useEffect(() => {
        const intervalId = setInterval(goToNext, 3000); // Change testimonial every 3000 milliseconds (3 seconds)

        return () => clearInterval(intervalId); // Clear the interval when the component is unmounted or re-rendered
    }, [currentIndex]); // Dependency array ensures the interval is reset if currentIndex changes

    return (
<div className="slider-container">
    <div className="testimonial-item">
        <TestimonialItem key={currentIndex} {...testimonials[currentIndex]} />
    </div>
    <div className='d-flex justify-content-between align-items-center text-center'>
        <span onClick={goToPrev}><i className='fa fa-chevron-left text-white pointer'></i></span>
        <span onClick={goToNext}><i className='fa fa-chevron-right text-white pointer'></i></span>
    </div>
</div>
    );
}

export default CustomSlider;