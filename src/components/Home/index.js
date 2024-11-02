import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi,<br /> I'm
                <img src={LogoTitle} alt="developer" />
                David Jesse
                <br />
                software developer
                </h1>
                <h2>
                Full-Stack Developer | Golang Expert | JavaScript Afficianado
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home