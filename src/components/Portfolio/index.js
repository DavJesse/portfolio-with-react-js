import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
<<<<<<< HEAD
=======
import GroupieTrackerImage from '../../assets/images/groupie-tab-pc.png';
import AsciiArtImage from '../../assets/images/ascii-art.png';
import CalculatorImage from '../../assets/images/calculator.png';
import TetrisImage from '../../assets/images/tetris-optimizer.png';
import AutocorrectImage from '../../assets/images/autocorrect.png';

>>>>>>> 8b7a0d3df80bfdb3625905a1d7f05d9de75f6616

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        // Simulating API call with setTimeout
        setTimeout(() => {
            setPortfolio(dummyPortfolioData);
        }, 1000);
    }, []);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                    src={port.image}
                                    className="portfolio-image"
<<<<<<< HEAD
                                    alt="portfolio" />
=======
                                    alt={port.image}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "../../assets/images/groupie-tracker-pc-mockup.png";
                                    }}
                                    />
>>>>>>> 8b7a0d3df80bfdb3625905a1d7f05d9de75f6616
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        indx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="line-spin-fade-loader" />
        </>
    );
}

export default Portfolio;

<<<<<<< HEAD
// Dummy data to replace Firebase data
const dummyPortfolioData = [
    {
        name: "Project 1",
        description: "Web Development",
        image: "/path/to/image1.jpg",
        url: "https://project1.com"
    },
    {
        name: "Project 2",
        description: "Mobile App",
        image: "/path/to/image2.jpg",
        url: "https://project2.com"
    },
    // Add more dummy projects as needed
=======
const dummyPortfolioData = [
    {
        name: "Groupie Tracker",
        description: "A web app that connects fans to their favorite artists. #FullStackDevelopment #APIs #JSON #Go #JavaScript",
        image: GroupieTrackerImage,
        url: "https://github.com/DavJesse/band-n-fan.git"
    },
    {
        name: "Ascii Art Generator",
        description: "A web page that displays printable asci art characters with even more creative characters. #FullStackDevelopment #Docker #HTML #CSS",
        image: AsciiArtImage,
        url: "https://github.com/DavJesse/ascii-print-style.git"
    },
    {
        name: "Basic Calculator",
        description: "A web-based calculator that can handle basic arithmetic. #FrontEndDevelopment #JavaScript #HTML #CSS",
        image: CalculatorImage,
        url: "https://github.com/DavJesse/my-calculator-app.git"
    },
    {
        name: "Tetris Optimizer",
        description: "A program that compacts a set of tetrominoes to their smallest possible square. #Go #Algorithm #Backtracking #DataStructures",
        image: TetrisImage,
        url: "https://github.com/DavJesse/tetris-solver.git"
    },
    {
        name: "Autocorrect with Go",
        description: "A program that autocarrects text based on a limited set of propmts issued in parenthesis. #BasicProgramming #Go #DataStructures #StringManipulation",
        image: AutocorrectImage,
        url: "https://github.com/DavJesse/autocorrect-with-go.git"
    },
>>>>>>> 8b7a0d3df80bfdb3625905a1d7f05d9de75f6616
];