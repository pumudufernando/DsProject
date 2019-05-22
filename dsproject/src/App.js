import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';

import Create from './components/search.component';
import Login from './components/Login.components';
import MainPage from './components/MainPage.component';
import ErrorPage from './components/errorPage';
import NavBar from "./components/navBar";
import Edit from './components/card.component';
import Index from './components/display.component';
import Bill from './components/bill';
import Signup from './components/Signup.component';
import Card from './components/mobile.component';


class App extends Component {
    render() {
        return (

            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/Create' component={Create} />
                        <Route exact path='/MainPage' component={MainPage} />
                        <Route exact path='/ErrorPage' component={ErrorPage} />
                        <Route path='/index/:sstation/:estation' component={ Index }/>
                        <Route path='/edit/:id' component={ Edit } />
                        <Route  path='/bill/:business_name/:id' component={ Bill }/>
                        <Route path='/card/:id' component={ Card } />
                        <Route  exact path='/Signup' component={ Signup }/>

                    </Switch>
                </main>

            </React.Fragment>
        );
    }
}

export default App;
