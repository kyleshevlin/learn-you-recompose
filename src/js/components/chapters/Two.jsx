import React from 'react'
import Chapter from '../Chapter'

const Two = () =>
  <Chapter number={2} heading="What is a Higher Order Component?">
    <p>
      {`
        A Higher Order Component (abbreviated to HOC hereafter), is a function that accepts a
        component as an argument and returns a component. At its core, a HOC is that simple.
      `}
    </p>

    <pre>
      <code>
        {`
const hoc = Component => Component
hoc(<MyComponent>) // <MyComponent>
          `}
      </code>
    </pre>
  </Chapter>

export default Two
