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
          contentLabel="portfolio-modal"
        >
          <span
            className="Modal--close"
            onClick={() => this.setState({modalOpen: false})}
          >X</span>
          <Row isColumn>
            <h2 className="Modal--header">
              {this.props.hoverText}<span className="pink">.</span>
            </h2>
          </Row>
          <Row isColumn>
            <p className="Modal--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia lacinia magna imperdiet dapibus. Curabitur vitae justo ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget tincidunt felis, eu ullamcorper velit. Suspendisse dui est, lacinia et rhoncus vitae, vehicula viverra arcu. Praesent ligula sem, lobortis sit amet justo non, hendrerit accumsan elit. Praesent porttitor efficitur elit sit amet tincidunt. Maecenas vel velit ac sem placerat malesuada vitae a risus. Sed pellentesque rutrum ligula ut vulputate. Suspendisse potenti. In mollis imperdiet dolor quis tincidunt.</p>
          </Row>
          <Row isColumn className="align-center">
            <img src="http://placehold.it/650x650" className="Modal--image" />
          </Row>
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
