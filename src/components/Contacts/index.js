import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
const Contacts = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const headerArray = ' Contact me.'.split('')

  return (

    
    <div className="container contacts-page">
      
      <div className="text-zone-main">
        <ul>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faEnvelope}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts
