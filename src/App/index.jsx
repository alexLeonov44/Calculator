import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import Loader from '@/components/Loader'
import { PageLayout } from '@/layouts'
import { Content } from '@/pages/Content/components'
import HeaderComponent from '@/components/Header'
import Calculator from '@/components/Calculator'
import ErrorBoundary from '@/helpers/ErrorBoundary'

export default () => {
  const [theme, setTheme] = React.useState('Colored')
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <PageLayout>
          <Content>
            <ErrorBoundary>
              <HeaderComponent
                theme={theme}
                setTheme={setTheme}
              />
              <Calculator
                theme={theme}
                setTheme={setTheme}
              />
            </ErrorBoundary>
          </Content>
        </PageLayout>
      </Switch>
    </Suspense>
  )
}
