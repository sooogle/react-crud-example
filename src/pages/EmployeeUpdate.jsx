import * as React from "react";
import { withRouter } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm"
import EmployeeService from "../stores/EmployeeStore";

export class EmployeeUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        id: '',
        name: '',
        age: '',
        sex: ''
      },
      loading: true,
    };
  }

  // APIコール&結果でstate更新はcomponentDidMountで行う
  async componentDidMount() {
    const employee = await EmployeeService.find(this.props.match.params.id);
    this.setState({
      employee: employee,
      loading: false
    })
  }

  render() {
    const { employee, loading } = this.state;
    return (
      <EmployeeForm employee={employee} loading={loading} />
    );
  }

}

export default withRouter(EmployeeUpdate);
