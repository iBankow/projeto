import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import Mural from '../components/home/Mural';
import UserCrud from '../components/users/UserCrud';
import redirect from '../components/home/Redirect';
import Locais from '../components/home/Locais'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud}/>
        <Route path='/mural' component={Mural}/>
        <Route path='/delegacia' component={Locais}/>  
        <Route path='/redirect' component={redirect}/>
        <Redirect from='*' to='/redirect'/>
    </Switch>