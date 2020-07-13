import React from 'react';
import './App.css';
import MySelect from "./MySelectList/MySelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const selectList = [
  { value: "enginnering", label: "Enginnering" },
  { value: "medical", label: "Medical" },
  { value: "biotechnology", label: "Biotechnology" },
  { value: "chemical", label: "Chemical" },
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: ["task", "Name", "description"],
      taskList: [
        { id: 1, name: 'Wasif' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Sachin' },
        { id: 4, name: 'Kamal' },
        { id: 5, name: 'Ashwini' },
        { id: 6, name: 'Rahul' },
        { id: 7, name: 'Sachetan' },
        { id: 8, name: 'Danial' },
        { id: 9, name: 'Harry' },
        { id: 10, name: 'Ashu' }
      ],
      startDate: new Date()
    }
  }

  renderTableHeader() {
    let header = this.state.header
    return header.map((key, index) => {
      return <th className="data" key={index}>{key.toUpperCase()}</th>
    })
  }

  renderTableData() {
    return this.state.taskList.map((student, index) => {
      const { id, name, } = student
      return (
        <tr key={id} className="taskhover">
          <td>{id}</td>
          <td>{name}</td>
          <td className="selectOption"> <MySelect
            className="myapp"
            options={selectList}
          /></td>
        </tr>
      )
    })
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };


  render() {
    return (
      <div className="App">
        <div className="dateContainer">
          <div className="dateSelector">
            <text>Select Date</text>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button onClick={this.handleClick} className="cancelBtn">
             Cancel
      </button>
            <button onClick={this.handleClick} className="saveBtn">
             Save
      </button>
          </div>
        </div>

        <div className="mainContainer">
          <table id='taskContainer'>
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
