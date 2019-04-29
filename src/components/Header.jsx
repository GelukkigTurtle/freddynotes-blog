import React from 'react'
import PropTypes from 'prop-types'

import { DefaultButton } from 'component/Button'
import { classNames } from 'util/commonUtil'

import 'css/header.scss'

/**
 * @description
 */
const Header = ({ title = 'freddyNotes', navList = [] }) => (
  <div className={classNames('HeaderContainer')}>
    {/* Header Title */}
    <DefaultButton to="/" customClass={classNames('HeaderTitle')}>
      {title}
    </DefaultButton>


    <div className={classNames('HeaderNav')}>
      {navList.map(navItem => {
        return (
          <DefaultButton key={navItem.name} to={navItem.path}>
            {navItem.name.toUpperCase()}
          </DefaultButton>
        )
      })}
    </div>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  navList: PropTypes.array.isRequired
}

export default Header
