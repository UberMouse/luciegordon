import React from 'react';
import './MyWork.css';
import { Row, Column } from 'react-foundation';
import Modal from 'react-modal';

class PortfolioItem extends React.Component {
  constructor() {
    super();

    this.state = {
      hovered: false,
      modalOpen: false,
    }
  }

  render() {
    const { hovered, modalOpen } = this.state;
    const hoverInformation = <span className="MyWork--hover-info">{this.props.hoverText}</span>

    return (
      <Column className="MyWork--image" medium={4}>
        <div
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          onClick={() => this.setState({modalOpen: true})}
          className="MyWork--container"
        >
          <img src={`assets/portfolio/${this.props.thumb}Thumbnail.jpg`} />
          {hovered && hoverInformation}
        </div>

        <Modal
          isOpen={modalOpen}
          overlayClassName="MyWork--modal-overlay"
        >
          <h1>{this.props.hoverText}</h1>
        </Modal>
      </Column>
    );
  }
}

export default () => (
  <div>
    <Row isColumn>
      <h2>Recent Work</h2>
    </Row>
    <Row className="MyWork--row">
      <PortfolioItem thumb="Mysci"      hoverText="Mysci"/>
      <PortfolioItem thumb="AnyQ"       hoverText="AnyQuestions"/>
      <PortfolioItem thumb="PokerCards" hoverText="Planning Poker Cards"/>
    </Row>
    <Row className="MyWork--row">
      <PortfolioItem thumb="EvM" hoverText="Earth v The Moon"/>
      <PortfolioItem thumb="NZ"  hoverText="Destination New Zealand"/>
      <PortfolioItem thumb="Ed"  hoverText="Ed the Axolotl"/>
    </Row>
  </div>
);
