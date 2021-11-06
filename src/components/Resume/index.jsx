import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
  // "";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

 

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
        
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
