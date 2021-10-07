import React, { Component } from 'react'
// import './CarouselStyle.css'
import '../../App.css'


export default class Carousel extends Component {
    render() {
    let slidePosition= 0;
    const slides = document.getElementsByClassName('carousel-item');
    const totalSlides = 3;

    function updateSlidePosition() {
        for( let slide of slides){
            slide.classList.remove('carousel-item-visible');
            slide.classList.add('carousel-item-hidden');
        }
        slides[slidePosition].classList.add('carousel-item-visible');
    }

    const moveToNext = () => {
        if(slidePosition === totalSlides -1){
            slidePosition = 0;
            console.log(slidePosition)
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }
    const moveToPrev = () => {
        if(slidePosition === 0){
            slidePosition = totalSlides -1;
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }
    return (
        <div className="carousel">
            <div className="carousel-item carousel-item-visible">
                <img src="images/wario1.png" alt="SLIDE ONE"/>
            </div>
            <div className="carousel-item">
                <img src="images/wario2.png" alt="SLDIE 2"/>
                    
            </div>
            <div className="carousel-item">
                <img src="images/wario3.png" alt="SLIDE 3"/>
            </div>

            <div className="carousel-actions">
                <button onClick={moveToPrev} id="carousel-btn-prev" aria-label="previous slide">{'<'}</button>
                <button onClick={moveToNext} id="carousel-btn-next" aria-label="next slide">{'>'}</button>
            </div>
        </div>

    )
    }
}