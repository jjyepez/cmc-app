// --- React
import React, { Component } from 'react'
// --- onsenui
import ons from 'onsenui'
// --- css, recursos, data y otras fuentes
import '../../css/app.css'
import './app-ui.css'
import 'onsenui/css/onsenui.min.css';
import 'onsenui/css/onsen-css-components.min.css';
// --- contenedores y UI
import Toolbar from '../../widgets/ui/toolbar'
import List    from '../../widgets/ui/list'
import { Navigator, Page, Tabbar, Tab } from 'react-onsenui'

class AppUI extends Component {
  renderToolbar = (estado, navigator) => {
    return (
      <Toolbar
        title      = {estado.title}
        backButton = {estado.hasBackButton}
      />
    )
  }
  renderTabs = () => {
console.log(this.props.data)
    return [
      {
        content: (
          <Page key={0}>
            <List
              data = {this.props.data}
            />
          </Page>
        ),
        tab: <Tab key={0} label='Home' icon='md-home' />
      },
      {
        content: <Page key={1}>abc</Page>,
        tab: <Tab key={1} label='Settings' icon='md-settings' />
      },
      {
        content: <Page key={2}>abc</Page>,
        tab: <Tab key={2} label='Hot' icon='md-fire' />
      }
    ]
  }
  renderPage = (estado, navigator) => {
    return (
      <Page
        renderToolbar = {this.renderToolbar.bind(this, estado, navigator)}
        className     = "AppUI"
        modifier      = "material"
        key           = {estado.title}
      >
        <Tabbar
          swipeable
          renderTabs = {this.renderTabs}
          position   = "top"
          index      = {0}
        />
      </Page>
    )
  }
  render(){
    return (
      <Navigator
        renderPage    = {this.renderPage}
        renderToolbar = {this.renderToolbar}
        initialRoute  = {{
          title         : 'First page',
          hasBackButton : true
        }}
      />
    )
  }
}

export default AppUI
