import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
The previous chapter explains what a HOC is and how we might use some basic HOCs in our app. Admittedly, the example used was a bit ridiculous. So let's dig into Recompose's API and find some HOCs that are actually useful.

If you would like to explore the Recompose API yourself, [here's the link](https://github.com/acdlite/recompose/blob/master/docs/API.md).
`

const Four = () =>
  <Chapter number={4} heading={`Let's Explore the Recompose API`}>
    <ReactMarkdown source={input} />
  </Chapter>

export default Four
