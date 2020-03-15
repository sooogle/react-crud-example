import * as React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class EmployeeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <tr>
        <td>
          <Link to={`employee/${this.props.employee.id}`}>
            {this.props.employee.id}
          </Link>
        </td>
        <td>{this.props.employee.name}</td>
        <td>{this.props.employee.age}</td>
        <td>{this.props.employee.sex === "1" ? "男" : "女"}</td>
        <td>
          <button
            className="ui button negative mini"
            onClick={this.handleDelete}
          >
            削除
          </button>
        </td>
      </tr>
    );
  }

  handleDelete() {
    this.props.onDelete(this.props.employee.id);
  }
}

EmployeeItem.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};
