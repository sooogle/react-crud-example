import * as React from "react";
import { withRouter } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

export class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        id: 'E0005',
        name: '',
        age: '',
        sex: '2',
      }
    };
  }

  render() {
    const employee = this.state.employee;
    return (
      <EmployeeForm employee={employee} loading={false} />
    );
  }

}

export default withRouter(EmployeeCreate);
