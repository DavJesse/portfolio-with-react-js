import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import "./index.scss"

const NotFound = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <div className='container error-page'>
        <div className='error-content'>
            <h1 className='error-type'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={"404 - Page Not Found".split("")}
                indx={15}
                />                
                </h1>
            <p>Unfortunately, the page you seek does not exist.</p>
            <Link to="/" className='flat-button'>Go back to homepage</Link>
        </div>
        </div>
    )
};

export default NotFound;