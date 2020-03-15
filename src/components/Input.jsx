import * as React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};