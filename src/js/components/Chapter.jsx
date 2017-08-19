// @flow

import React from 'react'

const Chapter = ({
  number,
  heading,
  children
}: {
  number: number,
  heading: string,
  children: any
}) =>
  <div className="chapter">
    <h2>
      Chapter {number}
    </h2>
    <h3>
      {heading}
    </h3>

    <div className="chapter-content">
      {children}
    </div>
  </div>

export default Chapter
