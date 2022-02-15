import { SettingsWrapper } from '@/pages/Content/components'
import React from 'react'
import { ClearHistoryButton } from './Buttons'
import DropDownMenu from './DropDownMenu'

import PropTypes from 'prop-types'

class SettingsComponent extends React.Component {
  render() {
    return (
      <SettingsWrapper id="setting-component">
        <p>Settings</p>
        <DropDownMenu setTheme={this.props.setTheme} theme={this.props.theme}/>
        
        <ClearHistoryButton onClick={this.props.clearHistory}> Clear All History</ClearHistoryButton>
      </SettingsWrapper>
    )
  }
}

export default SettingsComponent


SettingsComponent.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  clearHistory: PropTypes.func.isRequired,
}
