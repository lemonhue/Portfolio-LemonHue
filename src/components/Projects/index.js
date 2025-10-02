import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' Projects'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timer) // Proper Cleanup
  }, [])

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

      <div className="project-list">
        <grid className="cards">
          <div className="card">
            <h1>01</h1>
            <div  className="card-content-header">
              <a >AssetPro</a>
            </div>
            <div className="card-description">
              <h2>
                An Asset Management System built with MERN <br />
              </h2>
            </div>
            <div className="card-link">
              <span>Link: </span>
              <a href="https://github.com/lemonhue/AssetPro">
                https://github.com/lemonhue/AssetPro
              </a>
            </div>
          </div>
        </grid>
      </div>
    </div>
  )
}

export default Projects
