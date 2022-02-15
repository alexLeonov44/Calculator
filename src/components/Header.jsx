import { HeaderComponentWrapper } from '@/pages/Content/components'
import React from 'react'

import { useHistory } from 'react-router-dom'
import { LinkButton } from './Buttons'

import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Header({ theme, setTheme }) {
  const [selectButton, setSelectButton] = React.useState('/')
  const history = useHistory()

  const optionsSwitcher = path => {
    setSelectButton(path)
    history.push(path)
  }

  return (
    <HeaderComponentWrapper id="header" color={theme}>
      <div style={{ flex: 1 }}>Calculator App</div>
      <LinkButton
        onClick={() => optionsSwitcher('/')}
        style={{ marginRight: 15 }} selectButton={selectButton === '/' && selectButton} theme={theme} >
        Home
      </LinkButton>
      <LinkButton
        onClick={() => optionsSwitcher('/Settings')} selectButton={selectButton === '/Settings' && selectButton} theme={theme}>
        Settings
      </LinkButton>
    </HeaderComponentWrapper>
  )
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}
