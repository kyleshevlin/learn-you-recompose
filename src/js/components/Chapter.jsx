// @flow

import React from 'react'
import { compose, withState, withHandlers } from 'recompose'

const enhance = compose(
  withState('isClosed', 'toggleClosed', false),
  withHandlers({
    handleToggle: ({ isClosed, toggleClosed }) => () => {
      toggleClosed(!isClosed)
    }
  })
)

const Chapter = ({
  number,
  title,
  isClosed,
  handleToggle,
  children
}: {
  number: number,
  title: string,
  isClosed: boolean,
  handleToggle: Function,
  children: any
}) =>
  <div className="chapter">
    <header className="chapter-header">
      <button className="chapter-toggle" onClick={handleToggle}>
        {isClosed ? '[-]' : '[+]'}
      </button>
      <h2 className="chapter-heading">
        Ch. {number} - {title}
      </h2>
    </header>

    <div className={`chapter-content ${isClosed ? 'is-closed' : ''}`}>
      {children}
    </div>
  </div>

export default enhance(Chapter)
