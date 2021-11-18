import { Col, Row } from "react-bootstrap";

import { toolIcons } from "../../Data/tools";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolIcons.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons">
        {item.icon}
      </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
