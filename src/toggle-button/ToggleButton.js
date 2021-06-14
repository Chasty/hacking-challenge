import PropTypes from "prop-types";
import React, { Component } from "react";

import "./ToggleButton.css";

export default class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <div className= {`toggle-container ${selected ? "" : "disabledColor"}`} onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {/* {selected ? "YES" : "NO"} */}
        </div>
      </div>
    );
  }
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};
