import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

interface CardRankProps {
    name: string,
    position: number,
    points: number
};

export default function CardRank(props:CardRankProps) {
    return (
        <Container fluid className="card-rank-container mb-2">
            <Row className="h-100 p-3 px-5 justify-content-between">
                <Col xs={1} className="card-rank-position">
                    { props.position }
                </Col>
                <Col xs={6} className="card-rank-team">
                    { props.name.toUpperCase() }
                </Col>
                <Col className="card-rank-points text-center">
                    { props.points }
                </Col>
            </Row>
        </Container>
    )
}