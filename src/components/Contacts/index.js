import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'

const Contacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' Contact me.'.split('')

  return (
    <div className="container contacts-page">
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

export default Contacts
