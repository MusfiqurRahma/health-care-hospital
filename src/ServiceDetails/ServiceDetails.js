import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const matchedService =data.find(singleData => singleData.id ===parseInt(serviceId));
                setDetails(matchedService)
                console.log(matchedService);
            })
    },[serviceId])
    return (
        <div className='details-container'>
            <h2 className="detail-name">Know Details About Our Services</h2>
            <div>-----------------------------</div>
            <h5 className='detail-name'>{details?.name}</h5>
            <h6>{details?.desc}</h6>
            <img src={details?.img} alt="" />
            <button className='booking-btn'>Book Now</button>
        </div>
    );
};

export default ServiceDetails;