import React from 'react'
import Chapter from '../Chapter'

const One = () =>
  <Chapter number={1} heading="What is Recompose?">
    <p>
      {`
      Recompose is a utility library for React that takes advantage of the Higher Order Component
      pattern. At its core, Recompose allows you to transform stateless, functional components into
      stateful components (and more) with the use of HOCs.
      `}
    </p>

    <p>{`So without further ado, let's learn about Higher Order Components.`}</p>
  </Chapter>

export default One
