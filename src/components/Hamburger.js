import React, { Component } from 'react';
import map from 'lodash/map';
import './Hamburger.css';

export default class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  toggle = () => {
    this.setState({open: !this.state.open});
  }

  render() {
    const listifiedChildren = map(
      this.props.children,
      child => (
        <li>{child}</li>
      )
    );

    return (
      <div className="show-for-small-only Hamburger">
        <i
          className="fa fa-2x fa-bars Hamburger--toggle"
          aria-hidden="true"
          onClick={this.toggle}
        ></i>

        <ul className="Hamburger--items">
          {this.state.open && listifiedChildren}
        </ul>
      </div>
    );
  }
}
