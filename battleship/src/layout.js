import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import injectContext from './store/appContext'
import App from './views/App'
import Instructions from './views/instructions'
import Error from './views/error'

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} exact path='/' />
        <Route element={<Instructions />} exact path='/instructions' />
        <Route element={<Error />} path='*' />
      </Routes>
    </BrowserRouter>
  )
}

export default injectContext(Layout)