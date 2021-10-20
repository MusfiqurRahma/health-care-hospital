import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data=>setServices(data))
    },[])

    return (
     <div> <div className='mt-5'>
            <h5 style={{color:'#647589'}}>--Hospital departments--</h5>
            <h1 style={{ color: '#223645', fontWeight: '900',fontSize:'50px'}}>Managed Your HealthCare Services</h1>
            <img src="https://www.devsnews.com/wp/medidove/wp-content/themes/medidove/img/shape/section-title-line.png" alt="" />
        </div>
        <div className='services-container' xs={12} md={8}>
        {
                    services.map(service => <Service service={service}
                    key={service.id}
                    ></Service>)
        }
       </div>
    </div>
    );
};

export default Services;