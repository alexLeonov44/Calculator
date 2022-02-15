import {
  ControlPanelWrapper,
  Display,
  Key,
} from '@/pages/Content/components'
import React from 'react'
import Dispaly from './Display'
import HistoryComponent from './HistoryComponent'
import KeyPad from './KeyPad'
import PropTypes from 'prop-types'

class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operatorsAndDigits: [
        'C',
        '7',
        '8',
        '9',
        '*',
        '-',
        '4',
        '5',
        '6',
        '/',
        '+',
        '1',
        '2',
        '3',
        '=',
        '.',
        '(',
        '0',
        ')',
        'CE',
      ],
    }
  }
  render() {
    let { calc, updateCalc, history } = this.props
    return (
      <ControlPanelWrapper id="controll-panel">
        <div>
          <Dispaly calc={calc} />
          <KeyPad
            operatorsAndDigits={
              this.state.operatorsAndDigits
            }
            updateCalc={updateCalc}
          />
        </div>
        <HistoryComponent history={history} />
      </ControlPanelWrapper>
    )
  }
}

export default ControlPanel

ControlPanel.propTypes = {
  calc: PropTypes.string,
  updateCalc: PropTypes.func.isRequired,
  history: PropTypes.array,
}
