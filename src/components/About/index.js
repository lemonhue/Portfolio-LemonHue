import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import Me from '../../assets/images/me.jpg'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' About    me.'.split('')

  return (
    <div className="container-about-page">
      <div className="profile">
        <img src={Me} alt="Background" className="background-image" />
        <div className="about-page-header">
          <h1>
            <AnimatedLetters
              strArray={headerArray}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
        </div>
        <div className="description">
          <p>
            I’m Lou, though I go by Lemonhue online. My passion for the arts led
            me to programming, where I found a perfect balance between
            creativity and logic. I love creating projects that don’t just work
            well but also spark inspiration through their visuals.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
