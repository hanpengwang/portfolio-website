import React from "react";
import ContentContainer from "../content-container/ContentContainer";
import Maps from "./Maps";
import Contact from "./Contact";

import { Container, Row, Col } from "react-bootstrap";

class FindMe extends React.Component {
  render() {
    return (
      <div id="findme">
        <ContentContainer>
          <Container style={{}}>
            <Row>
              <Col sm={6}>
                <Contact />
              </Col>
              <Col sm={6}>
                <Maps />
              </Col>
            </Row>
          </Container>
        </ContentContainer>
      </div>
    );
  }
}

export default FindMe;
