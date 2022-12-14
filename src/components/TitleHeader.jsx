import React from 'react'

const TitleHeader = ({ children, title }) => {
  return (
    <div className="title-header">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  )
}

export default TitleHeader
