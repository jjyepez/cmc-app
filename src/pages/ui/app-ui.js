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
import Loading from '../../widgets/ui/loading'

class AppUI extends Component {
  state = {
    loading: false
  }
  renderToolbar = (route, navigator) => {
    return (
      <Toolbar
        title      = {route.title}
        backButton = {route.hasBackButton}
      />
    )
  }
  renderTabs = () => {
    return [
      {
        tab: (
          <Tab
            key={0}
            label='Home'
            icon='md-home'
            modifier = "ios"
          />),
        content: (
          <Page key={0}>
            <List
              data = {this.props.data}
            />
          </Page>
        )
      },
      {
        tab: (
          <Tab
            key={1}
            label='Favorite'
            icon='md-favorite'
            tabBorder = {false}
          />),
        content: (
          <Page key={1}>
            <List
              data = {this.props.dataFav}
            />
          </Page>
        )
      },
    ]
  }
  // <Tabbar
  //   swipeable
  //   renderTabs = {this.renderTabs}
  //   position   = "bottom"
  //   index      = {0}
  // />
  renderPage = (route, navigator) => {
    return (
      <Page
        renderToolbar = {this.renderToolbar.bind(this, route, navigator)}
        className     = "AppUI"
        key           = {route.title}
      >
        { this.state.loading ?
            <Loading / >
          :
            <List
              data = {this.props.data}
            />
        }
      </Page>
    )
  }
  render(){
    return (
      <Navigator
        className     = "emu"
        renderPage    = {this.renderPage}
        renderToolbar = {this.renderToolbar}
        initialRoute  = {{
          title         : 'CoinMarketCap',
          hasBackButton : true
        }}
      />
    )
  }
}

export default AppUI
