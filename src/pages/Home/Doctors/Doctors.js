import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data=>setDoctors(data))
    },[])

    return (
      <>  <div>
            <h5>---- Out Team ----</h5>
            <h1>A Professional & <br /> Care Provider</h1>
            <img src="https://www.devsnews.com/wp/medidove/wp-content/themes/medidove/img/shape/section-title-line.png" alt="" />
        </div>
        <div>
                {
                    doctors.map(doctor=><Doctor doctor={doctor} key={doctor.id}></Doctor>)
                } 
        </div> </>
    );
};

export default Doctors;