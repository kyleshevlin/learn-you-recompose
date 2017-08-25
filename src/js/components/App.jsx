import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'
import AllChapters from './AllChapters'

const App = () =>
  <Provider store={store}>
    <div className="wrap">
      <div className="container">
        <Header />
        <AllChapters />
      </div>
    </div>
  </Provider>

export default App
