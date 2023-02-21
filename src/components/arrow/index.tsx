import React from 'react'
import './arrow.less'

export default function (props) {
  const { style = {} } = props
  return <div style={style} className="year-reporter-arrow">
    <div className="a1" />
    <div className="a2" />
  </div>
}