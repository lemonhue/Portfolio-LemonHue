import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' About me.'.split('')

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={headerArray}
            letterClass={letterClass}
            idx={15}
          />
          <p>always learning new things.</p>
        </h1>
      </div>
    </div>
  )
}

export default About
