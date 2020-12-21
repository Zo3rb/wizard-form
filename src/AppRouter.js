import React from 'react';

// Native Imports from Node_Modules
import { Switch, Route } from 'react-router-dom';

// Internal Imports from App Structure
import { LandingPage, LoginPage } from './pages';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    );
}

export default AppRouter;
