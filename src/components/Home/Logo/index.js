import './index.scss'
import Me from '../../../assets/images/me1.jpg'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  return (
    <div className="image-container">
      <img className="image" src={Me} alt="S" />
    </div>
  )
}

export default Logo;
