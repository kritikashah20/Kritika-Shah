import { Container, Row, Col } from "react-bootstrap";

import { socialLinks } from "../../Data/links";

function FooterF() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} KS</h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
          {socialLinks.map((item, index) => (
                <li className="social-icons">
                <a
                  href={item.link}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </li>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterF;
