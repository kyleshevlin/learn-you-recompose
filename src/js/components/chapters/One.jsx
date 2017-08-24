import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from '../Chapter'

const input = `
Recompose is a utility library for React that takes advantage of the Higher Order Component (hereafter abbreviated to HOC) pattern. At its core, Recompose allows you to transform stateless, functional components into stateful components (and more) with the use of HOCs.

Before we get too far ahead of ourselves, let's make sure we understand what a stateless functional component is (hereafter abbreviated to SFC). A SFC is a pure function that returns DOM (or rather VDOM to be specific) derived solely from its inputs. Implied in "pure function", SFCs will always return the same output given the same input. A pure function also means that no side effects were created during the call of the function. In other words, a pure function makes no updates to any state outside of its function when called.

So without further ado, let's learn about HOCs.
`

const One = () =>
  <Chapter number={1} heading="What is Recompose?">
    <ReactMarkdown source={input} />
  </Chapter>

export default One
