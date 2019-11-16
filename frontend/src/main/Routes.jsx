import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/users/UserCrud';
import redirect from '../components/home/Redirect';

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud}/>
        <Route path='/redirect' component={redirect}/>
        <Redirect from='*' to='/redirect'/>
    </Switch>