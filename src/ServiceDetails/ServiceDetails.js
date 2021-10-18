import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = ( { name, desc, img }) => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h2>Details: {serviceId}</h2>
            <p>{name}</p>
            <p>{desc}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceDetails;