import { Container, Row, Col } from "react-bootstrap";

import { socialLinks } from "../../Data/links";

function FooterF() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      {/* <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME AT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map((item, index) => (
                <li className="social-icons">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  {item.icon}
                </a>
              </li>
              ))}
            </ul>
          </Col>
        </Row> */}
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
