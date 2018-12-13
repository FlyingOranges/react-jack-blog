import * as React from 'react';
import {HashRouter, Switch} from 'react-router-dom';
import {FrontendAuth} from '../components/frontend-auth/FrontendAuth';
import {routerConfig} from './route';

class AppRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <FrontendAuth {...this.props} config={routerConfig}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default AppRouter;