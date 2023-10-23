import type { MetaFunction } from "@remix-run/node";
import CardRank from "~/components/card-rank"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

export const meta: MetaFunction = () => {
  return [
    { title: "PowerRank" },
    { name: "description", content: "Welcome to PowerRank!" },
  ];
};

export default function Index() {
  return (
    <Container className="p-5">
      <Row>
        <div className="pb-3 container-title">
          WORLD RANKING
        </div>
      </Row>
      <Row>
        <CardRank
          position={1}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={2}
          name="T1"
          points={1800}
        />
        <CardRank
          position={3}
          name="JDG"
          points={1800}
        />
        <CardRank
          position={4}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={5}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={6}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={7}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={8}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={9}
          name="Cloud 9"
          points={1800}
        />
        <CardRank
          position={10}
          name="Cloud 9"
          points={1800}
        />
      </Row>
      <Row>
        <p className="d-flex justify-content-end">
          <a
            className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            href="/world-ranking"
          >
            SEE MORE {">"}
          </a>
        </p>
      </Row>
    </Container>
  );
}
