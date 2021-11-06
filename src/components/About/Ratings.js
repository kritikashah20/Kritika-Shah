import { Col, Row } from "react-bootstrap";

import { techIcons } from "../../Data/tech";

const Ratings = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map((item, index) => (
        <Col
          xs={4}
          md={2}
          
        >
          {item.rating}
        </Col>
      ))}
    </Row>
  );
};

export default Ratings;
