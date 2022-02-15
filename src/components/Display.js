import React from 'react'
import {
  DisplayResult,
  DisplayWrapper,
} from '@/pages/Content/components'

import PropTypes from 'prop-types'

export default function Display({ calc }) {
  return (
    <DisplayWrapper>
      <DisplayResult id="dispaly-result">{calc || 0}</DisplayResult>
    </DisplayWrapper>
  )
}

Display.propTypes = {
  calc: PropTypes.string,
}
