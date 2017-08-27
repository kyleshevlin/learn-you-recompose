import React from 'react'
import ReactMarkdown from 'react-markdown'
import data from '../data'
import Chapter from './Chapter'

const AllChapters = () =>
  <div className="all_chapters">
    {data.chapters.map((chapter, index) =>
      <Chapter key={chapter.title} number={index + 1} title={chapter.title}>
        <ReactMarkdown source={chapter.content} />
      </Chapter>
    )}
  </div>

export default AllChapters
