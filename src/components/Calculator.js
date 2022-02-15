import React, { lazy, memo, useState } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

import ControlPanel from './ControlPanel'

const SettingsComponent = lazy(() =>
  import('@/components/SettingsComponent'),
)

function Calculator({ theme, setTheme }) {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const [history, setHistory] = useState([])
  const [calculateDone, setCalculateDone] = useState(false)
  const operators = ['/', '*', '+', '-', '.']
  const cancellation = ['C', 'CE']

  const calculate = () => {
    setHistory(prev => [...prev, calc.replace("/-"," /-")])
    setCalculateDone(true)
    let value = eval(calc)
    setCalc(
      Number.isInteger(value)
        ? value.toString()
        : value.toFixed(2).toString(),
    )
  }

  const deleteLast = () => {
    if (calc === '') {
      return
    }
    const value = calc.slice(0, -1)
    setCalc(value)
  }
  const clearHistory = () => {
    alert('History cleared!')
    setHistory([])
    clearDisplay()
  }

  const clearDisplay = () => {
    setCalc('')
  }

  const updateCalc = value => {
    if (
      (operators.includes(value) && calc === '') ||
      (operators.includes(value) &&
        operators.includes(calc.slice(-1)))
    ) {
      return
    }
    if (calculateDone && !cancellation.includes(value)) {
      setCalc(
        operators.includes(value) ? calc + value : value,
      )
      setCalculateDone(false)
      return
    }

    switch (value) {
      case '=':
        calculate()
        return
        break
      case 'CE':
        deleteLast()
        return
        break
      case 'C':
        clearDisplay()
        return
        break
    }
    setCalc(calc + value)
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  return (
    <>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        render={() => (
          <ControlPanel
            history={history}
            calc={calc}
            updateCalc={updateCalc}
          />
        )}
      />
      <Route
        exact
        path={SETTINGS_PAGE_ROUTE}
        render={() => (
          <SettingsComponent
            setTheme={setTheme}
            theme={theme}
            clearHistory={clearHistory}
          />
        )}
      />
    </>
  )
}

export default memo(Calculator)

Calculator.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
}
