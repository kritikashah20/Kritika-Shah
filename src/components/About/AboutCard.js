import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import pdf from "../../Assets/KritikaShah_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Kritika Shah </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am a final year student currently pursuing B.Tech in
            Computer Science and Engineering from VIT University, Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        </blockquote>
        <Button variant="primary" href={pdf} target="_blank" style={{marginTop: "20px"}}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
