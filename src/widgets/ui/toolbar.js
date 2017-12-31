import React from 'react'
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Card, Button, Input, Toolbar, ToolbarButton, Icon } from 'react-onsenui'

const ToolbarUI = props => {
  return (
    <Toolbar>
      <div className="left" modifier="material">
        <ToolbarButton>
          <Icon  icon = "md-menu"></Icon>
        </ToolbarButton>
      </div>
      <div className = "title center">
        {props.title}
      </div>
      <div className="right" modifier="material">
        <ToolbarButton>
          <Icon icon = "md-more-vert"></Icon>
        </ToolbarButton>
      </div>
    </Toolbar>
  )
}

export default ToolbarUI
