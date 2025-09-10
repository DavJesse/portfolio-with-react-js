import { useEffect, useState } from 'react';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faCss3, faGolang, faNodeJs, faJsSquare, faDocker } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
        
    }, [])

    return (
        <>
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
                    Hi, I’m David Jesse Odhiambo — a Full-Stack Developer with strong focus on Frontend Engineering and Go Development.
                </p>
                <p>
                    I began my software journey in January 2024 when I joined the Zone01 Kisumu Apprenticeship Program, a decision that sparked my passion for problem-solving and building scalable digital solutions. Since then, I’ve worked on projects that range from dashboards powered by GraphQL APIs, to real-time stock tracking apps, to polished portfolio websites.
                </p>
                <p>
                    Over the past two years, I’ve:
                    <ul>
                        <li>Built 45+ full-stack applications using Go, Node.js, and React/Next.js.</li>
                        <li>Developed StockFolio, a stock portfolio tracker with virtual trading, live stock data (Finnhub API), Jest/Playwright testing, Docker, and CI/CD pipelines.</li>
                        <li>Created StudyDash, an interactive dashboard that visualizes student progress using GraphQL queries and SVG-based data visualization.</li>
                        <li>Designed and deployed my own portfolio website, showcasing clean UI and full-stack integration.</li>
                    </ul>
                </p>
                <p>
                    My approach to development emphasizes:
                    <ul>
                        <li>Frontend excellence — responsive, intuitive UIs built with React, Next.js, and TypeScript.</li>
                        <li>Backend robustness — APIs and services in Go and Node.js, optimized for scalability.</li>
                        <li>Code quality & collaboration — testing, documentation, and structured Git workflows.</li>
                    </ul>
                </p>
                <p>Tech stack highlights: Go (Golang), React, Next.js, Node.js, TypeScript, PostgreSQL, SQLite, Docker, Git, CI/CD pipelines.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNodeJs} color='#F06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faDocker} color='#5ED4F4' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGolang} color='#00ADD8' />
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
        <Loader type="line-spin-fade-loader" />
        </>
    )
}

export default About