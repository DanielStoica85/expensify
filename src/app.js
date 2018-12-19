import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => {
    return (
        <div>
            This is my dashboard component
        </div>
    )
}

const AddExpensePage = () => {
    return (
        <div>
            This is my add expense component
        </div>
    )
}

const EditExpensePage = () => {
    return (
        <div>
            This is my edit component
        </div>
    )
}

const HelpPage = () => {
    return (
        <div>
            This is my help component
        </div>
    )
}

const NotFoundPage = () => {
    return (
        <div>
            This is my 404 component
        </div>
    )
}

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));