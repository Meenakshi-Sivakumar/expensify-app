import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

const ExpenseDashBoardPage = () => (
    <div>
        This is from my dashBoard component.
    </div>
);
const AddExpensePage = () => (
    <div>
        This is from my AddExpense component.
    </div>
);

const EditExpensePage = () =>(
    <div>
    This is from my Edit component.
    </div>
) 

const HelpExpensePage = () =>(
    <div>
    This is from my Help component.
    </div>
)

const NotFoundPage = () =>(
    <div>
        404 - <Link to='/'>Go Home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>To Home Page</NavLink>
        <NavLink to='/create' activeClassName="is-active">To Create Page</NavLink>
        <NavLink to='/edit' activeClassName="is-active">To Edit Page</NavLink>
        <NavLink to='/help' activeClassName="is-active">To Help Page</NavLink>
    </header>
)

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch> 
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
);
export default AppRouter;