import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
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
        404!
    </div>
)

const routes = (
    <BrowserRouter>
    <Switch> 
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
    </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app')); 