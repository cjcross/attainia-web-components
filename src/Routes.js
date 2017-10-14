import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Resources from './components/resources/Resources.container'
import ResourcesDetail from './components/resources/ResourcesDetail.container'
import ResourcesNew from './components/resources/ResourcesNew.container'
import AuthenticatedApp from './components/App'

import store from './store'

export default (
    <Provider store={store}>
        <AuthenticatedApp>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Resources} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/resources/new" component={ResourcesNew} />
                    <Route exact path="/resources/:id" component={ResourcesDetail} />
                </Switch>
            </BrowserRouter>
        </AuthenticatedApp>
    </Provider>
)
