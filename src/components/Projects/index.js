import React, { Component } from 'react';
import Thumbnail from './Thumbnail.js';

export default class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row pb-5">
                            <Thumbnail></Thumbnail>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}