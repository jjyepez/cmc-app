import React, { Component } from 'react'
import Avatar from './avatar'
import { List, ListHeader, ListItem } from 'react-onsenui'
import './list.css'

class ListUI extends Component{
  render(){
    console.log(this.props)
    return (
      <List>
        <ListHeader>
        <div className = "ListItem-row">
            <div className = "ListItem-dato">Rank</div>
            <div className = "ListItem-logo">Logo</div>
            <div className="ListItem-dato">Symbol</div>
            <div className="ListItem-dato">Name</div>
            <div className="ListItem-dato">PercCh 1 h%</div>
            <div className="ListItem-dato">Price</div>
          </div>
        </ListHeader>
          {
            this.props.data.map( item => {
                const classPCh = item.percent_change_1h < 0 ? 'red' : 'green'
                return (
                  <ListItem
                    className = "List-ListItem"
                    key = {parseInt(item.rank)}
                  >
                  <div className = "ListItem-row">
                      <div className = "ListItem-dato">{item.rank}</div>
                      <div className = "ListItem-logo">
                        <img
                          width={32}
                          height={32}
                          src={`https://files.coinmarketcap.com/static/img/coins/32x32/${item.id}.png`}
                        />
                      </div>
                      <div className="ListItem-dato">{item.symbol}</div>
                      <div className="ListItem-dato">{item.name}</div>
                      <div className={`ListItem-dato ${classPCh}`}>{item.percent_change_1h}%</div>
                      <div className="ListItem-dato">${item.price_usd}</div>
                    </div>
                  </ListItem>
                )
              }
            )
          }
      </List>
    )
  }
}

export default ListUI

/*
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
*/
