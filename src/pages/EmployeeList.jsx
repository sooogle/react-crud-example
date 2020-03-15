import * as React from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../stores/EmployeeStore";
import EmployeeItem from "../components/EmployeeItem";
import { Dimmer, Loader } from "semantic-ui-react"

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeList: [],
      loading: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  async componentDidMount() {
    const list = await EmployeeService.findList();
    this.setState({
      employeeList: list,
      loading: false,
    });
  }

  async handleDelete(id) {
    this.setState({ loading: true });
    await EmployeeService.delete(id);
    this.setState({
      employeeList: this.state.employeeList.filter(emp => emp.id !== id),
      loading: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Dimmer active={this.state.loading} inverted>
          <Loader />
        </Dimmer>
        <table className="ui table">
          <thead>
            <tr>
              <th>従業員コード</th>
              <th>氏名</th>
              <th>年齢</th>
              <th>性別</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.employeeList.map(employee => (
              <EmployeeItem
                employee={employee}
                onDelete={this.handleDelete}
                key={employee.id}
              />
            ))}
          </tbody>
        </table>
        <Link to="/employee/new" className="ui primary button">
          新規登録
        </Link>
      </React.Fragment>
    );
  }
}
