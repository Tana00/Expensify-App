import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddExpensePage from "../component/AddExpense";
import EditExpensePage from "../component/EditExpense";
import ExpenseDashboardPage from "../component/ExpenseDashboard";
import Header from "../component/Header";
import HelpPage from "../component/Help";
import NotFoundPage from "../component/404";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
