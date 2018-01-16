import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '~containers/Home';
import City from '~containers/City';
import User from '~containers/User';
import Search from '~containers/Search';
import Detail from '~containers/Detail';
import NotFound from '~containers/404';

class RouteMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/city' component={City} />
                    <Route path='/user' component={User} />
                    <Route path='/search/:category/:keyword?' component={Search} />
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        );
    };
};

export default RouteMap;