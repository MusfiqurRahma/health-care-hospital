import React from 'react';
import notFound from '../../images/notFound/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" /> <br />
            <button style={{backgroundColor:'#e12454',border:'1px solid #e12454',color:'whitesmoke',padding:'10px 20px',marginBottom:'20px',fontWeight:'600'}}>Go Home</button>
        </div>
    );
};

export default NotFound;