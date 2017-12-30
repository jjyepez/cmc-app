// --- React
import React from 'react'
// --- css, recursos, data y otras fuentes
import './AppUI.css'
// --- contenedores y UI

const AppUI = props => (
  <div
    className = "AppUI"
    ref       = {props.handleSetRef}
  >
    <h1>Jai der!</h1>
  </div>
)

export default AppUI
