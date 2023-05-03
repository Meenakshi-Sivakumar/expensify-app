import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles/styles.scss';
import '../node_modules/normalize.css'

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
        <Link to='/'>To Home Page</Link>
        <Link to='/create'>To Create Page</Link>
        <Link to='/edit'>To Edit Page</Link>
        <Link to='/help'>To Help Page</Link>
    </header>
)

const routes = (
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

ReactDOM.render(routes,document.getElementById('app')); 