import React, { Component } from 'react';
import {Tab, NavItem, NavDropdown, MenuItem, Col, Row, Nav, Button} from 'react-bootstrap';
import './App.css';

class Banner extends Component {
  render(){
    return (
      <div className={"tab-banner " + this.props.colorClass}>
        {this.props.title}
      </div>
    );
  }
}

class ContentArea extends Component{
  render(){
    return (
      <div>
        <Banner colorClass={this.props.bannerColor} title={this.props.bannerTitle}/>
        <Row>
          <Col sm={10} smOffset={1}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tab.Container defaultActiveKey="about">
          <Row className="clearfix">
            <Col sm={12}>
              <Nav bsStyle="tabs">
                <NavItem eventKey="about">About</NavItem>
                <NavItem eventKey="portfolio">Portfolio</NavItem>
                <NavDropdown eventKey="fhtl" title="Family History Tech" id="nav-dropdown-within-tab">
                  <MenuItem eventKey="mainportal">Main Web Portal</MenuItem>
                  <MenuItem eventKey="virtualpedigree">Virtual Pedigree</MenuItem>
                  <MenuItem eventKey="recordquest">Record Quest</MenuItem>
                </NavDropdown>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content animation>
                <Tab.Pane eventKey="about">
                  <ContentArea className="content-pane" bannerTitle="About me" bannerColor="bluebanner">
                    <h2>About Me</h2>
                  </ContentArea>
                </Tab.Pane>
                <Tab.Pane eventKey="portfolio">
                  <ContentArea className="content-pane" bannerTitle="Portfolio" bannerColor="greenbanner">
                    Tab 2 content
                  </ContentArea>
                </Tab.Pane>
                <Tab.Pane eventKey="mainportal">
                  <ContentArea className="content-pane" bannerTitle="Portfolio" bannerColor="greenbanner">
                    Tab 2 content
                  </ContentArea>
                </Tab.Pane>
                <Tab.Pane eventKey="virtualpedigree">
                  <ContentArea className="content-pane" bannerTitle="Virtual Pedigree" bannerColor="vpbanner">
                    <h2>Fluid Family History</h2>
                    <p>
                      Virtual Pedigree is a fast, simple, and intuitive window into your family tree. Using innovative spatial compression, Virtual Pedigree's fluid interface allows you to easily explore your family tree - keeping the most relevant data close to you at all times.
                    </p>
                    <a href="https://virtual-pedigree.fhtl.byu.edu"><Button bsStyle="info" bsSize="large">Visit Virtual Pedigree</Button></a>
                    <img className="image" alt="screenshot" src="https://virtual-pedigree.fhtl.byu.edu/images/VPLoadingScreenPic.png"/>
                  </ContentArea>
                </Tab.Pane>
                <Tab.Pane eventKey="recordquest">
                  <ContentArea className="content-pane" bannerTitle="Record Quest" bannerColor="rqbanner">
                    <Row>
                      <Col sm={6} smOffset={3}>
                        <img className="image" alt="screenshot" src="https://recordquest.fhtl.byu.edu/images/RQ-Logo.png"/>
                      </Col>
                    </Row>
                    <h2>Education in Entertainment</h2>
                    <p>
                      I'm excited to announce a beta pre-release of Record Quest, the latest in a string of educational games from BYU's Family History Technology Lab.
                    </p>
                    <a href="https://recordquest.fhtl.byu.edu"><Button bsStyle="warning" bsSize="large">Play Record Quest (Beta)</Button></a>
                    <Row>
                      <Col sm={6}>
                        <img className="image" alt="screenshot" src="https://recordquest.fhtl.byu.edu/images/RQ-Logo.png"/>
                      </Col>
                      <Col sm={6}>
                        <img className="image" alt="screenshot" src="https://virtual-pedigree.fhtl.byu.edu/images/VPLoadingScreenPic.png"/>
                      </Col>
                    </Row>
                    <p>
                      Record Quest is an educational game designed to help young adults learn basic practices of genealogical research. The game is a partnership between
                      BYU's Center for Family History and Genealogy and BYU's Family History Technology Lab. Developers worked closely with trained family historians to
                      create a believable and authentic story where players receive guided learning about family history within a wider world full of puzzles and challenges.
                    </p>
                    <p>
                      The story begins with a mysterious letter describing a lost inheritance that might rightfully belong to the player. The only catch is that in order to
                      claim the inheritance, the player must first prove their relationship to a distant uncle. In pursuit of this goal, players will visit dusty attics,
                      frozen cemeteries, dark basements, and the Web. The world of Record Quest is filled with challenging puzzles, frightening enemies, and helpful characters
                      to help you along the way.
                    </p>
                  </ContentArea>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
