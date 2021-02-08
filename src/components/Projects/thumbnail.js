import React, { Component } from "react";
import styled from 'styled-components'; 


export default class Product extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m-3 p-3">
            <div className="card bg-light p-3">
              <div className="card-img">
                project thumbnail
              </div>
            </div>
            <h5 className="card-footer align-self-center text-blue font-italic mb-0">
              project name
            </h5>
          </div>
          <div className="col m-3 p-3">
            <div className="card bg-light p-3">
              <div className="card-img">
                project thumbnail
              </div>
            </div>
            <h5 className="card-footer align-self-center text-blue font-italic mb-0">
              project name
            </h5>
          </div>
          <div className="col m-3 p-3">
            <div className="card bg-light p-3">
              <div className="card-img">
                project thumbnail
              </div>
            </div>
            <h5 className="card-footer align-self-center text-blue font-italic mb-0">
              project name
            </h5>
          </div>
          <div className="col m-3 p-3">
            <div className="card bg-light p-3">
              <div className="card-img">
                project thumbnail
              </div>
            </div>
            <h5 className="card-footer align-self-center text-blue font-italic mb-0">
              project name
            </h5>
          </div>
        </div>
      </div>
    );
  }
}


