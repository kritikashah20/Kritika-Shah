import { Row, Col } from "react-bootstrap";

import { educationData } from "../../Data/education";

const EducationCard = () => {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {educationData.map((item, index) => (
        <Col xs={12} md={12} className="tech-icons">
          <p style={{fontWeight: "bold", fontSize: "20px", textAlign: "left", paddingLeft: "5px", textDecoration: "underline"}} className="purple">{item.title}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Degree: </span> {item.degree}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Marks: </span>{item.marks}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Duration: </span>{item.duration}</p>
        </Col>
      ))}
    </Row>
  );
};

export default EducationCard;