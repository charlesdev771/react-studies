import { useState } from "react";
import React from "react";
import Home from '../pages/Home';
import About from '../pages/About';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
export default function ()
{

    return (
        <>
        
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>Sobre</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </Router>
        
        </>
    );

}