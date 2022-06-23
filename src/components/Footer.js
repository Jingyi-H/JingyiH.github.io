import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div id='footer' className='text-center'>
      <a href='https://github.com/Jingyi-H'>
        <span className='icon'><FontAwesomeIcon icon={faGithub} /></span>
      </a>
      <a href='https://www.linkedin.com/in/jingyi-huang-jh99/'>
        <span className='icon'><FontAwesomeIcon icon={faLinkedin} /></span>
        </a>
      <a href='mailto: jingyih1999@gmail.com'>
        <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
      </a>
    </div>
  )
}

export default Footer