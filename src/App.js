import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeUpdate from "./pages/EmployeeUpdate";
import { Header } from 'semantic-ui-react'

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header as="h1">従業員マスターメンテナンス</Header>
        <Route path="/" exact={true} component={EmployeeList} />
        <Route path="/employee/new" component={EmployeeCreate} />
        <Route path="/employee/:id(E\d+)" component={EmployeeUpdate} />
      </React.Fragment>
    </Router>
  );
}

export default App;
