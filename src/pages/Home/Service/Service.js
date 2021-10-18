import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name,img,desc } = props.service;
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
                <button className='detail-btn'>See Details</button>
            </div>
        </div>
    );
};

export default Service;