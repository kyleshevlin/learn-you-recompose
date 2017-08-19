import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
The previous chapter explains what a HOC is but not necessarily how to make it useful.
`

const Three = () =>
  <Chapter number={3} heading={`Now Let's Make a Useful HOC`}>
    <ReactMarkdown source={input} />
  </Chapter>

export default Three
