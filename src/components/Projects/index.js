import React, { Component } from 'react';
import Carousel from './Carousel';

export default class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row pb-5">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}