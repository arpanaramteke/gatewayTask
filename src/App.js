import React from 'react';
import './App.css';
import MySelect from "./MySelect";
import data from "./doc/data";

const data1=[
  { value: "ocean", label: "here" },
  { value: "blue", label: "data is there" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" }
];  

class App extends React.Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      header: ["task", "taskName", "description"],
      students: [
        { id: 1, name: 'Wasif' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Saad' },
        { id: 4, name: 'Asad' },
        { id: 5, name: 'Asad' },
        { id: 6, name: 'Asad' },
        { id: 7, name: 'Asad' },
        { id: 8, name: 'Asad' },
        { id: 9, name: 'Asad' },
        { id: 10, name: 'Asad' }
      ],
      students: [
        { id: 1, name: 'Wasif' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Saad' },
        { id: 4, name: 'Asad' },
        { id: 5, name: 'Asad' },
        { id: 6, name: 'Asad' },
        { id: 7, name: 'Asad' },
        { id: 8, name: 'Asad' },
        { id: 9, name: 'Asad' },
        { id: 10, name: 'Asad' }
      ]
    }
  }

  renderTableHeader() {
    let header = this.state.header
    return header.map((key, index) => {
      return <th className="data" key={index}>{key.toUpperCase()}</th>
    })
  }


  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, } = student //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td className="selectOption"> <MySelect
            className="myapp"
            options={data1}
            onChangeCallback={response => console.log(response)}
          /></td>
        </tr>
      )
    })
  }


  render() {
    return (
      <div className="App">
        <div>
          <text>Select Date</text>
        </div>
        <div >
          <table id='students'>
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
