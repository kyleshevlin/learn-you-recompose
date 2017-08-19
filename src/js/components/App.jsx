import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Greeting from './Greeting'
import One from './chapters/One'
import Two from './chapters/Two'

const App = () =>
  <Provider store={store}>
    <div className="wrap">
      <div className="container">
        <Greeting message="Greetings from Learn You Recompose!" />
        <One />
        <Two />
      </div>
    </div>
  </Provider>

export default App
