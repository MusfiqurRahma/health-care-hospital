import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id,name,img,desc } = props.service;
    return (
        <div className='service-container'>
            <div className='service-img'>
                <img src={img} alt="" />
            </div>
            <br />
            <div>
                <h4>{name}</h4>
                <p>{desc.slice(0, 210)}</p>
                <br />
                <Link to={`/servicedetails/${id}`}>
                <button className='detail-btn'>See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;