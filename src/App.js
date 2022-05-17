import React, { Suspense, useEffect, useState } from 'react'
import Loader from './loader'

const DesctopVersion = React.lazy(() => import('./desctopVer'))
const MobileVersion = React.lazy(() => import('./mobileVersion'))

const App = () => {
  const [screenWidth, setScreenWidth] = useState()
  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <>
      {screenWidth < 768 ? (
        <Suspense
          fallback={
            <>
              <div>Loading mobile version...</div>
              <Loader />
            </>
          }
        >
          <MobileVersion />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <>
              <div>Loading desctop version...</div>
              <Loader />
            </>
          }
        >
          <DesctopVersion />
        </Suspense>
      )}
    </>
  )
}

export default App
