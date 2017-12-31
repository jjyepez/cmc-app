import React, { Component } from 'react'
import Avatar from './Avatar'
import { List, ListHeader, ListItem } from 'react-onsenui'
import './List.css'

class ListUI extends Component{
  render(){
    return (
      <List>
        <ListHeader>Encabezado</ListHeader>
        <ListItem className = "List-ListItem">
          {
            this.props.data.map( (item, i) => {
                console.log( item )
                return (
                  <div
                    className="ListItem-dato"
                    key = {i}
                  >
                    {item}
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
