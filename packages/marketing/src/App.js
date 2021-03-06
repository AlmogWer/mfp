import React from 'react'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
import {createGenerateClassName, StylesProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default () => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing' component={Pricing}/>
                    <Route path='/' component={Landing}/>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}