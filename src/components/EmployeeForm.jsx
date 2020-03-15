import * as React from "react";
import { withRouter } from "react-router-dom";
import EmployeeService from "../stores/EmployeeStore";
import { Button, Form } from "semantic-ui-react";

export class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: props.employee,
      loading: props.loading,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // propsの変更をstateに伝えて再度レンダリングさせる
  // compomentWillReceivePropsというフックもあるが廃止予定
  componentDidUpdate(prevProps) {
    const { employee, loading } = this.props;
    // loadingがtrueからfalseに変わったタイミングのみsetStateを実行する
    // この条件がないとsetStateを契機に無限ループする
    if (prevProps.loading && !loading) {
      this.setState({
        employee: { ...employee },
        loading: loading,
      });  
    }
  }

  render() {
    const { employee, loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} loading={loading}>
        <Form.Field>
          <label htmlFor="id">従業員コード</label>
          <input
            type="text"
            name="id"
            value={employee.id}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="name">氏名</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="age">年齢</label>
          <input
            type="number"
            name="age"
            value={employee.age}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Group inline>
          <label>性別</label>
          <Form.Radio
            label='男'
            name='sex'
            value='1'
            checked={employee.sex === '1'}
            onChange={this.handleRadioChange}
          />
          <Form.Radio
            label='女'
            name='sex'
            value='2'
            checked={employee.sex === '2'}
            onChange={this.handleRadioChange}
          />
        </Form.Group>
        <Button type="submit" className="primary">登録</Button>
      </Form>
    );
  }

  handleInputChange(e) {
    const employee = this.state.employee;
    this.setState({ employee: { ...employee, [e.currentTarget.name]: e.currentTarget.value } })
  }

  // semantic-uiのラジオボタンは純粋なhtmlコンポーネントではないので、イベントからnameとvalueを取れない
  handleRadioChange(e, target) {
    const employee = this.state.employee;
    this.setState({ employee: { ...employee, [target.name]: target.value } })
  }

  handleSubmit(e) {
    e.preventDefault();
    EmployeeService.create(this.state.employee);
    this.props.history.push("/");
  }
}

export default withRouter(EmployeeForm);
