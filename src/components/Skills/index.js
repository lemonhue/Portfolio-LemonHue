import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' Skills.'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // Proper Cleanup
  }, [])

  return (
    <div className="container skills-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={headerArray}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
      </div>

      <grid className="Skills-list">
        <div className="Languages-list"></div>
        <div className="Frameworks-list"></div>
        <div className="Tools-list"></div>
      </grid>
    </div>
  )
}

export default Skills
