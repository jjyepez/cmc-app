import React, { Component } from 'react'
import Avatar from './avatar'
import { List, ListHeader, ListItem } from 'react-onsenui'
import './list.css'

class ListUI extends Component{
  render(){
    return (
      <List>
        <ListHeader>Encabezado</ListHeader>
        <ListItem className = "List-ListItem">
          {
            this.props.data.map( (item, i) => {
                return (
                  <div
                    className="ListItem-dato"
                    key = {i}
                  >
                    <b>{item[0]}</b>: {item[1]}
                  </div>
                )
              }
            )
          }
        </ListItem>
      </List>
    )
  }
}

export default ListUI
