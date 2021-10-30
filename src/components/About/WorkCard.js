import { Row, Col } from "react-bootstrap";

import { workData } from "../../Data/work";

const WorkCard = () => {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {workData.map((item, index) => (
        <Col xs={12} md={12} className="tech-icons">
          <p style={{fontWeight: "bold", fontSize: "20px", textAlign: "left", paddingLeft: "5px", textDecoration: "underline"}} className="purple">{item.title}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Position: </span> {item.position}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Work: </span>{item.desc}</p>
          <p style={{fontSize: "15px", textAlign: "left", paddingLeft: "5px"}}><span style={{fontWeight: "bold", color: "#12b0d1"}}>Duration: </span>{item.duration}</p>
        </Col>
      ))}
    </Row>
    )
}

export default WorkCard
