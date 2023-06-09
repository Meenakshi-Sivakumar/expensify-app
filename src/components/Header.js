import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>To Home Page</NavLink>
        <NavLink to='/create' activeClassName="is-active">To Create Page</NavLink>
        <NavLink to='/help' activeClassName="is-active">To Help Page</NavLink>
    </header>
)

export default Header;