import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'
import All from './chapters/All'

const App = () =>
  <Provider store={store}>
    <div className="wrap">
      <div className="container">
        <Header />
        <All />
      </div>
    </div>
  </Provider>

export default App
