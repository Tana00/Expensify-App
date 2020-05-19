import React from "react";
import { Router, Route, Switch } from "react-router-dom";
//import createHistory from "history/createBrowserHistory";
import { createBrowserHistory } from "history";
import AddExpensePage from "../component/AddExpense";
import EditExpensePage from "../component/EditExpense";
import ExpenseDashboardPage from "../component/ExpenseDashboard";
import Header from "../component/Header";
import NotFoundPage from "../component/404";
import Login from "../component/Login";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

const AppRouter = (props) => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute exact={true} path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
