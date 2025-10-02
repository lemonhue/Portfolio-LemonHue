import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' Projects.'.split('')

  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={headerArray}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
      </div>
    </div>
  )
}

export default Projects
