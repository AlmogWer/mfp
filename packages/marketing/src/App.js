import React from 'react'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import {StylesProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}