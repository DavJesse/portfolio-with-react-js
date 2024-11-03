import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faCss3, faGolang, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm','e']}
                    indx={15}
                    />
                </h1>
                <p>
                    Hello! My name is David Jesse. I enjoy solving poblems. My problem-solving journey kicked off in January 2024 when I joined the Zone01 Apprenticeship Program, and frankly, it was the best decision I ever made.
                </p>
                <p>
                    While grinding on the keybord can be tiresome, the dopamine hit you get after resolving a bug is a high like no other. Perhaps addiction is a strong word, but I can comfatably say that I'm passionate about programming.
                </p>
                <p>
                    In my relatively short career I have participated in Hackathons; even bagging the Kisumu Dala edition of the Google I/O Extendended Hackathon. I have built programs that have enabled me to master web development, APIs, data structures and algoriths, version control, and data analytics.
                </p>
                <p>
                    Below are some of the technologies I've worked with:
                    <ul>
                        <li>Golang</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Git</li>
                        <li>Blockchain</li>
                        <li>Html</li>
                        <li>CSS</li>
                    </ul>
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGolang} color='#28BEB0' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD91D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About