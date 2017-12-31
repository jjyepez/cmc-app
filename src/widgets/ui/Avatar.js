import React from 'react'
import './Avatar.css'

const Avatar = props => (
  <img
    width     = {props.size}
    height    = {props.size}
    className = {'Avatar ' + props.className}
    src       = {props.imageURL}
  />
)

export default Avatar
