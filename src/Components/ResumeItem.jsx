import HTMLReactParser from 'html-react-parser'
import React from 'react'

const ResumeItem = ({title,year,icon,desc}) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>
      <span className='resume__date'>{year}</span>
      <h3 className='resume__subtitle'>{HTMLReactParser(title)}</h3>
      <p className='resume__description'>{HTMLReactParser(desc)}</p>
    </div>
  )
}

export default ResumeItem