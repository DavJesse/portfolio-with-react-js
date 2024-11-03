import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
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
        </div>
    )
}

export default About