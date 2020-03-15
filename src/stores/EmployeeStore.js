export default class EmployeeStore {
  
  static findList() {
    const result = this.employeeList.slice();
    return new Promise(resolve => {
      setTimeout(() => resolve(result), 1000);
    });
  }

  static find(id) {
    const result = Object.assign({}, this.employeeList.find(x => x.id === id));
    return new Promise(resolve => {
      setTimeout(() => resolve(result), 1000);
    });
  }

  static create(employee) {
    this.employeeList.push(employee);
    return new Promise(resolve => {
      setTimeout(() => resolve(employee), 1000);
    });
  }

  static update(employee) {
    this.employeeList = this.employeeList.map(x => (x.id === employee.id ? employee : x));
    return new Promise(resolve => {
      setTimeout(() => resolve(employee), 1000);
    });
  }

  static delete(id) {
    this.employeeList = this.employeeList.filter(x => x.id !== id);
    return new Promise(resolve => {
      setTimeout(() => resolve(id), 1000);
    });
  }

  static employeeList = [
    { id: "E0001", name: "Satoh", age: "25", sex: "1" },
    { id: "E0002", name: "Suzuki", age: "25", sex: "2" },
    { id: "E0003", name: "Tanaka", age: "30", sex: "1" },
    { id: "E0004", name: "Matsumoto", age: "27", sex: "1" }
  ];
}
