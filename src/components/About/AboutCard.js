import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Kritika Shah </span>
            from <span className="purple"> Indore, India.</span>
            <br />I am a final year student currently pursuing B.Tech in Computer Science and Engineering from VIT University, Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
        </blockquote>
        
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
