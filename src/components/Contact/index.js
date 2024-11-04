import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
        
    }, [])

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    indx={15}
                    />
                </h1>
                <p>
                    I'm interested in new opportunities in freelance - especially those abitious or extensive projects
                    However, if you have other questions, requests, or just want to say hi; don't hesitate to contact me via the form below.
                </p>
            </div>
        </div>
        <Loader type='line-spin-fade-loader' />
        </>
    )
}

export default Contact