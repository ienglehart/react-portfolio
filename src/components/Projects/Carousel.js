import React, { Component } from 'react'
import '../../App.css'

export default class Carousel extends Component {
    render() {
        return (
        <div className="mx-auto p-3">
            <div id="carouselIndicators" className="carousel slide carousel-sized" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-slide-to="0" className="active"></li>
                    <li data-slide-to="1"></li>
                    <li data-slide-to="2"></li>
                </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block fit-image" src="images/wario1.png" alt="Project 1"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>wario 1</h5>
                        <p>wah</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block fit-image" src="images/wario2.png" alt="Project 2"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>wario 2</h5>
                        <p>waah</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block fit-image" src="images/wario3.png" alt="Project 3"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>wario 3</h5>
                        <p>waaah</p>
                    </div>
                </div>
            </div>
                <a className="carousel-control-prev mx-auto" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next mx-auto" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        )
    }
}
