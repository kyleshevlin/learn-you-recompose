import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Greeting from './Greeting'
import All from './chapters/All'

const App = () =>
  <Provider store={store}>
    <div className="wrap">
      <div className="container">
        <Greeting message="Greetings from Learn You Recompose!" />
        <All />
      </div>
    </div>
  </Provider>

export default App
