import React, { Component } from 'react';
import map from 'lodash/map';
import cx from 'classnames';
import './Hamburger.css';

export default class Hamburger extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };
  }

  toggle = () => {
    if (this.state.open)
      document.body.classList.remove('Hamburger--open');
    else
      document.body.classList.add('Hamburger--open');

    this.setState({open: !this.state.open});
  }

  render() {
    const { open } = this.state;

    const headerifiedChildren = map(
      this.props.children,
      child => (
        <h1 className="semi-bold" onClick={this.toggle}>{child}</h1>
      )
    );
    const iconClasses = cx({
      fa: true,
      'fa-2x': true,
      'Hamburger--toggle': true,
      'fa-bars': !open,
      'fa-times': open,
    });
    const containerClasses = cx({
      'show-for-small-only': true,
      'Hamburger': true,
      'Hamburger--open': open,
    });

    return (
      <div className={containerClasses}>
        <span className="pink">Lucie Gordon</span>
        <i
          className={iconClasses}
          aria-hidden="true"
          onClick={this.toggle}
        ></i>

        {this.state.open && (
          <div className="Hamburger--items">
            {headerifiedChildren}
          </div>
        )}
      </div>
    );
  }
}
