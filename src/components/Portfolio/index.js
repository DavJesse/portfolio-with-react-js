import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import groupieTrackerImage from '../../assets/images/groupie-tracker.png';
import asciiArtImage from '../../assets/images/ascii-art.png';


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
                                    alt={port.image}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "../../assets/images/groupie-tracker-pc-mockup.png";
                                    }}
                                    />
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

// Dummy data to replace Firebase data
const dummyPortfolioData = [
    {
        name: "Groupie Tracker",
        description: "A web app that connects fans to their favorite artists.\n#WebDevelopment #APIs #JSON #Go #JavaScript",
        image: groupieTrackerImage,
        url: "https://github.com/DavJesse/band-n-fan.git"
    },
    {
        name: "Ascii Art Generator",
        description: "A web page that displays printable asci art characters with creatve",
        image: asciiArtImage,
        url: "https://github.com/DavJesse/ascii-print-style.git"
    },
    // Add more dummy projects as needed
];