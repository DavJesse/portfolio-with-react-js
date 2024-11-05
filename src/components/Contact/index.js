import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
      emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
        
    }, [])
    

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,       
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,      
          form.current,                                   
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        )
        .then(
            () => {
                alert('Message successfully sent!');
            },
            (error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send the message, please try again');
            }
        );
      }

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

                <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>

                </div>
            </div>

            <div className='info-map'>
            David Jesse Odhiambo,
            <br />
            Kenya,
            <br />
            Lake Basin Mall, Vihiga RD
            <br />
            Kisumu, Kenya
            <br />
            <span>jesseomolo@gmail.com</span>
            </div>
        </div>
        <Loader type='line-spin-fade-loader' />
        </>
    )
}

export default Contact