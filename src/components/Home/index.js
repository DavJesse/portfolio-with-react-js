import {useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters/index.js';
import Logo from './Logo/index.js'
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D', 'a', 'v', 'i', 'd', ' ', 'J', 'e', 's', 's', 'e']
    const jobArray = [
        's',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                indx={15}
                />
                <br />
                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                indx={22}
                />
                </h1>
                <h2>
                Full-Stack Developer | Golang Expert | JavaScript Afficianado
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        <Logo />
        </div>
    )
}

export default Home