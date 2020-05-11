import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../component/AddExpense";
import EditExpensePage from "../component/EditExpense";
import ExpenseDashboardPage from "../component/ExpenseDashboard";
import Header from "../component/Header";
import NotFoundPage from "../component/404";
import Login from "../component/Login";

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
