import React, { Component } from "react";
import Select, { components } from "react-select";

const Option = props => (
    <div>
        <components.Option {...props} >
            <input type="checkbox" checked={props.isSelected} onChange={() => null} />{" "}
            <label>{props.label}</label>
        </components.Option>
    </div>
);

const MultiValue = props => (
    <components.MultiValue {...props}>
        <span>{props.data.label}</span>
    </components.MultiValue>
);

class MySelect extends Component {
    render() {
        const { options, onChangeCallback} = this.props;
        return (
            <Select
                closeMenuOnSelect={false}
                isMulti
                components={{ Option, MultiValue }}
                options={options}
                hideSelectedOptions={false}
                backspaceRemovesValue={false}
                onChange={e => onChangeCallback(e)}
            />
        );
    }
}

export default MySelect;
