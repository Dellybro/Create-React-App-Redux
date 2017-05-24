import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import containers from './containers'


export default function createRoutes(history) {
  return (
    
	<ConnectedRouter history={history}>
		<Switch>
	        <Route exact path="/" component={containers.App}/>
	        <Route path="/home" component={containers.Home}/>
	    </Switch>
	</ConnectedRouter>
  )
}