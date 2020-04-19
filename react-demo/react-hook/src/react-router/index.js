import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import routerConfig from './router-config'
// import asyncComponent from "./asyncComponent";
import loadable from "./loadable";

class combineRouter extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Switch>
                        {
                            routerConfig.router.map(router => {
                                return <Route key={router.path} path={router.path}
                                              exact={router.exact}
                                              component={loadable(router.component)}
                                />
                            })
                        }
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default combineRouter