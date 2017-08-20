import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'prismjs/prism' // eslint-disable-line import/first
import '../scss/app.scss'
import 'prismjs/themes/prism-okaidia.css' // eslint-disable-line import/first

ReactDOM.render(<App />, document.getElementById('app'))
