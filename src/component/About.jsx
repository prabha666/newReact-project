import React from "react"

import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route,
    Switch
  } from "react-router-dom";


export default function About() {
    return (
        <div>
            <div className="container py-5 my-5  ">
                <div className="row mx-auto">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                     <p className="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nisi culpa laboriosam atque perferendis eius, provident quod dolor odit ducimus eum dignissimos voluptatibus autem excepturi harum recusandae ad voluptates assumenda. Autem enim blanditiis facilis iusto aliquid repudiandae placeat illo rerum.
                     </p>
                     <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nisi culpa laboriosam atque perferendis eius, provident quod dolor odit ducimus eum dignissimos voluptatibus autem excepturi harum recusandae ad voluptates assumenda. Autem enim blanditiis facilis iusto aliquid repudiandae placeat illo rerum.
                     </p>
                     
                        <div className="" button>
                            <Link to="/contact" className="btn btn-outline-primary ms-2">
                                <i className="fa fa-user-plus me-1"></i>contact us</Link>
                        </div>
                    </div>
                    <div className="col-md-6  mb-4 py-4 my-4">
                    <img src="/assets/about.jpg" alt="About us" height="400px" width="400px" />
                    </div>
                   
             </div>
            </div>
        </div>
    )
}