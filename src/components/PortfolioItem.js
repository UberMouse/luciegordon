import React, { Component, PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PortfolioModal from './PortfolioModal';
import './PortfolioItem.css';

export default class PortfolioItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false,
      modalOpen: false,
    }
  }

  closeModal = () => {
    this.setState({modalOpen: false});
  }

  openModal = () => {
    this.setState({modalOpen: true});
  }

  render() {
    const { hovered, modalOpen } = this.state;
    const { hoverText } = this.props;

    const hoverInformation = (
      <span className="PortfolioItem--hover-info">{hoverText}</span>
    );

    return (
      <Column className="PortfolioItem--image" medium={4} small={12}>
        <div
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          onClick={this.openModal}
          className="PortfolioItem--container"
        >
          <img src={`assets/portfolio/${this.props.thumb}Thumbnail.jpg`} />
          <CSSTransitionGroup
            transitionName="information-hover"
            transitionEnterTimeout={100}
            transitionLeaveTimeout={100}
          >
            {hovered && hoverInformation}
          </CSSTransitionGroup>
        </div>

        <PortfolioModal
          open={modalOpen}
          header={hoverText}
          closeCb={this.closeModal}
        />
      </Column>
    );
  }
}
