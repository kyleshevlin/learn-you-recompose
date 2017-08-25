import React from 'react'
import ReactMarkdown from 'react-markdown'
import Chapter from './Chapter'
import ch1 from '../chapters/1'
import ch2 from '../chapters/2'
import ch3 from '../chapters/3'
import ch4 from '../chapters/4'

const allChapters = [ch1, ch2, ch3, ch4]

const AllChapters = () =>
  <div className="all_chapters">
    {allChapters.map((chapter, index) =>
      <Chapter key={chapter.title} number={index + 1} title={chapter.title}>
        <ReactMarkdown source={chapter.content} />
      </Chapter>
    )}
  </div>

export default AllChapters
