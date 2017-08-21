import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
Recompose is a utility library for React that takes advantage of the Higher Order Component (hereafter abbreviated to HOC) pattern. At its core, Recompose allows you to transform stateless, functional components into stateful components (and more) with the use of HOCs.

So without further ado, let's learn about HOCs.
`

const One = () =>
  <Chapter number={1} heading="What is Recompose?">
    <ReactMarkdown source={input} />
  </Chapter>

export default One
