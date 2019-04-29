import React from 'react'
import { FaGithub, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/lib/fa'
import { IoEmail } from 'react-icons/lib/io'

import Layout from 'component/Layout'
import { SNSButton, LinkButton } from 'component/Button'

import 'css/index.scss'

const Index = props => {
  return (
    <Layout {...props}>
      <div className="bContainer">
        <div className="bCard">
          {/* Main Image */}
          <div className="img">
            <LinkButton to="/">
              <img
                className="img-circle"
                src="https://avatars0.githubusercontent.com/u/3178361?s=400&u=97329d07f2ba08f5c37455436cdc4ee1a5c35483&v=4"
                alt="MainImge"
              />
            </LinkButton>
          </div>
          {/* My Name */}
          <div className="name">Freddy Ayala</div>
          {/* Title */}
          <div className="title">Software Engineer</div>
          {/* SNS Buttons */}
          <div className="sns">
            <SNSButton key={'Mail_button'} to={'mailto:fredd.seb8@gmail.com'}>
              <IoEmail size="1.5rem" />
            </SNSButton>
            <SNSButton
              key={'Github_button'}
              to={'https://github.com/GelukkigTurtle'}
            >
              <FaGithub size="1.5rem" />
            </SNSButton>
            <SNSButton key={'Linkedin_button'} to={'https://www.linkedin.com/in/freddy-ayala/'}>
              <FaLinkedin size="1.5rem" />
            </SNSButton>
          </div>

          {/* Bottom Button */}
          <div className="menu">
            <div className="menuItem">
              <LinkButton to="/posts">All Post</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/category">Category</LinkButton>
            </div>
            <div className="menuItem">
              <LinkButton to="/aboutMe">About Me</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
