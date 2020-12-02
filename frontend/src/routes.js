import react from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import User from './pages/User/index';
import Profile from './pages/Profile/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={User}/> 
                <Route path="/create" component={Profile}/> 
                <Route path="/update/:id" component={Profile}/> 
            </Switch>
        </BrowserRouter>
    );
}