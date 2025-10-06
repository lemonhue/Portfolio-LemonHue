import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import Me from '../../assets/images/me.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' About    me.'.split('')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={headerArray}
            letterClass={letterClass}
            idx={15}
          />
        </h1>

        <div className="description">
        <p>
          My name is Lou but I go by Lemonhue online. I have a passion for the
          arts and this love for the craft eventually led me into the art of Web
          Developing.{' '}
        </p>
      </div>
      </div>
      
      <div className="profile">
        <img src={Me} alt="Background" className="background-image" />
      </div>
    </div>
  )
}

export default About
