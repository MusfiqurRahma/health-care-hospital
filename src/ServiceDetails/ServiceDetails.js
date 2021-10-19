import React, { useEffect, useState,  } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const matchedService = data.find(singleData => singleData.id == serviceId);
                setDetails(matchedService)
                console.log(matchedService);
            })
    },[serviceId])
    return (
        <div>
            <h2>Service: {serviceId}</h2>
            <p>{details?.name}</p>
            <p>{details?.desc}</p>
            <img src={details?.img} alt="" />
        </div>
    );
};

export default ServiceDetails;