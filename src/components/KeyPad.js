import React from 'react'
import {
  Key,
  KeyPadWrapper,
} from '@/pages/Content/components'

import PropTypes from 'prop-types'

export default function KeyPad({
  operatorsAndDigits,
  updateCalc,
}) {
  return (
    <KeyPadWrapper id="keyPad">
      {operatorsAndDigits.map((el, i) => (
        <Key className='key-button' onClick={() => updateCalc(el)} key={el + i}>
          {el}
        </Key>
      ))}
    </KeyPadWrapper>
  )
}

KeyPad.propTypes = {
  operatorsAndDigits: PropTypes.array.isRequired,
  updateCalc: PropTypes.func.isRequired,
}
