import React, { Component } from 'react'
import Avatar from './Avatar'
import { List, ListHeader, ListItem } from 'react-onsenui'
import './List.css'

class ListUI extends Component{
  render(){
    return (
      <List>
        <ListHeader>Encabezado</ListHeader>
        { this.props.dataD && this.props.dataD.map( item => (
              <ListItem
                className = "List-ListItem"
                key       = { item._id }
              >
                <div className = "Left">
                  <Avatar
                    size      = {40}
                    className = "List-Avatar"
                    imageURL  = { item.avatar }
                  />
                </div>
                <div className = "Center">
                  <div>{item.nombre} {item.apellido}</div>
                  <small>{item.correo}</small>
                </div>
              </ListItem>
            )
          )
        }
      </List>
    )
  }
}

export default ListUI
