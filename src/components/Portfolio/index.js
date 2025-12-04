import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import GroupieTrackerImage from '../../assets/images/groupie-tab-pc.png'
import AsciiArtImage from '../../assets/images/ascii-art.png'
import TajjjrImage from '../../assets/images/tajjjr.png'
import TetrisImage from '../../assets/images/tetris-optimizer.png'
import StockFolio from '../../assets/images/stockfolio.png'
import DiaWiseImage from '../../assets/images/diawise.png'
import StudyDash from '../../assets/images/study-dash.png'
import PortfolioSite from '../../assets/images/portfolio-site.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      setPortfolio(dummyPortfolioData)
    }, 1000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.image}
                className="portfolio-image"
                alt={port.image}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src =
                    '../../assets/images/groupie-tracker-pc-mockup.png'
                }}
              />
              <div className="content">
                <h4 className="title">{port.name}</h4>
                <p className="description">{port.description}</p>
                <div className="roles">
                  <p className="roles-text">Roles:</p>
                  {port.roles.map((role) => {
                    return <div className="role-pill">{role}</div>
                  })}
                </div>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            indx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Portfolio

const dummyPortfolioData = [
  {
    name: 'TAJJJR Landing Page',
    description:
      'A modern website with blog and content management system. #JavaScript #HTML #CSS',
    image: TajjjrImage,
    roles: ['Frontend Developer'],
    url: 'https://tajjj-nine.vercel.app/',
  },
  {
    name: 'StockFolio',
    description:
      'A stock portfolio tracking app. #RESTful-APIs #Finnhub-API #React #Node.js #Tailwind #JWT #TypeScript',
    image: StockFolio,
    roles: ['FullStack Developer'],
    url: 'https://stock-folio.onrender.com',
  },
  {
    name: 'StudyDash',
    description:
      'A web app that students in the Zone01 ecosystem can track their performances. #GraphQL #React #Node.js #Tailwind #JWT #JavaScript',
    image: StudyDash,
    roles: ['FullStack Developer'],
    url: 'https://study-dash-z01-demo.vercel.app/',
  },
  {
    name: 'Personal Portfolio Template',
    description:
      'A configurable personal portfolio website. #Vite #Node.js #Tailwind #React #JavaScript',
    image: PortfolioSite,
    roles: ['FullStack Developer'],
    url: 'https://portfolio-templates-five.vercel.app/',
  },
  {
    name: 'DiaWise',
    description:
      'A companion for persons living with or caring for patients of diabete. #HealthTech #APIs #MySQL #Go #JavaScript',
    image: DiaWiseImage,
    roles: ['Frontend Developer'],
    url: 'https://diabetics-management-app.onrender.com',
  },
  {
    name: 'Groupie Tracker',
    description:
      'A web app that connects fans to their favorite artists. #APIs #JSON #Go #JavaScript',
    image: GroupieTrackerImage,
    roles: ['FullStack Developer'],
    url: 'https://github.com/DavJesse/band-n-fan.git',
  },
  {
    name: 'Ascii Art Generator',
    description:
      'A web page that displays printable asci art characters with even more creative characters. #FullStackDevelopment #Docker #HTML #CSS',
    image: AsciiArtImage,
    roles: ['Backend Developer'],
    url: 'https://github.com/DavJesse/ascii-print-style.git',
  },
  {
    name: 'Tetris Optimizer',
    description:
      'A program that compacts a set of tetrominoes to their smallest possible square. #Go #Algorithm #Backtracking #DataStructures',
    image: TetrisImage,
    roles: ['Go Developer'],
    url: 'https://github.com/DavJesse/tetris-solver.git',
  },
]
