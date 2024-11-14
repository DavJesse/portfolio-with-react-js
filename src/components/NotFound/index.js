import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"

const NotFound = () => {
    return (
        <div className='container error-page'>
        <div className='not-found'>
            <h1>404 - Page Not Found</h1>
            <p>Unfortunately, the page you seek does not exist.</p>
            <Link to="/">Go back to homepage</Link>
        </div>
        </div>
    )
};

export default NotFound;