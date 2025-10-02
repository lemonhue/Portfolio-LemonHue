import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import About from '../About'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faLinkedin,
  faEye,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>

         <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contacts"
          className="contact-link"
        >
          Contacts
        </NavLink>
      </nav>
      
    </div>
  )
}

export default Navbar
