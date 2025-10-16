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
            arts and I took up Programming because I believe it bridges the gap
            between arts and science. I like creating things that are visually
            interesting and on that, I believe that web dev can be
            more than just functionality. {' '}
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
