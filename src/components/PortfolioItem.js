/* global ga */
import React, { Component, PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PortfolioModal from './PortfolioModal';
import BuildModalContent from '../BuildModalContent';
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
    ga('send', 'event', 'Modal', 'Open', this.props.hoverText);

    this.setState({modalOpen: true});
  }

  render() {
    const { hovered, modalOpen } = this.state;
    const { contentRoot, hoverText, skills, content } = this.props;

    const hoverInformation = (
      <div className="PortfolioItem--hover-info">
        <span>{hoverText} </span>
        <span><i className="fa fa-arrow-right"></i></span>
      </div>
    );

    return (
      <Column className="PortfolioItem" medium={4} small={12}>
        <div
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          onClick={this.openModal}
          className="PortfolioItem--container"
        >
          <img src={`assets/portfolio/${contentRoot}/thumb.jpg`} className="PortfolioItem--image" />
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
          skills={skills}
          closeCb={this.closeModal}
        >
          {BuildModalContent(contentRoot, content)}
        </PortfolioModal>
      </Column>
    );
  }
}
