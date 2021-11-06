import { lazy, Suspense, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { title } from "../../Data/titles";

import Type from "../../Helpers/Type";
import { setTitle } from "../../Helpers/misc";
import NewComp from "../NewComp";

const Home2 = lazy(() => import("./HomeAbout"));

function Home() {

  const skills = [
    {
      skill: "react",
      rating: 3
    },
    {
      skill: "html",
      rating: 3.5
    },
    {
      skill: "c++",
      rating: 4
    }
  ]

  useEffect(() => {
    setTitle(title.home);
  }, [])

  return (
    <section>
      <Container fluid className="home-section" id="home">

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KRITIKA SHAH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Home2 />
      </Suspense>


      {skills.map((item, index) => <NewComp {...item}/>)}
      


    </section>
  );
}

export default Home;
