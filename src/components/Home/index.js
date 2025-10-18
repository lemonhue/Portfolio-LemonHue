import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Firebase from '../../assets/images/firebase.png'
import React from '../../assets/images/React.png'
import Next from '../../assets/images/Next.png'
import NodeJS from '../../assets/images/NodeJS.png'
import Github from '../../assets/images/github.png'
import HTML from '../../assets/images/html.png'
import CSS from '../../assets/images/css.png'
import JavaScript from '../../assets/images/javascript.png'
import Express from '../../assets/images/Express.png'
import Postman from '../../assets/images/postman.png'
import MongoDB from '../../assets/images/MongoDB.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ' Lemonhue.'.split('')
  const jobArray = 'A Web Developer based in PH.'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // Proper Cleanup
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _12`}>,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _12`}>'</span>
          <span className={`${letterClass} _12`}>m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2> Frontend Developer / Javascript Developer / Illustrator</h2>

        <Link to="/contacts" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="skills">
        <ul>
          <li>
            <img src={React} alt="React" />
          </li>
          <li>
            <img src={JavaScript} alt="JavaScript" />
          </li>
          <li>
            <img src={HTML} alt="HTML" />
          </li>
          <li>
            <img src={CSS} alt="CSS" />
          </li>
          <li>
            <img src={Next} alt="Next" />
          </li>
          <li>
            <img src={NodeJS} alt="Node" />
          </li>
          <li>
            <img src={Express} alt="Express" />
          </li>
          <li>
            <img src={MongoDB} alt="MongoDB" />
          </li>
          <li>
            <img src={Firebase} alt="Firebase" />
          </li>
          <li>
            <img src={Postman} alt="Postman" />
          </li>
          <li>
            <img src={Github} alt="Github" />
          </li>
        </ul>
      </div>
      <Logo />
    </div>
  )
}

export default Home
