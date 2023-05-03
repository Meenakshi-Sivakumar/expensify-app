import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
    <div>
        <Route path="/" component={ExpenseDashBoardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes,document.getElementById('app')); 