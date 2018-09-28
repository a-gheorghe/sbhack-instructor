import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './App'
import Dashboard from 

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </main>
)

export default Main
