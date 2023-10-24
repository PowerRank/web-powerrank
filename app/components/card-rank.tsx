import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import TeamRank from "~/interfaces/TeamRank";

export default function CardRank(props: TeamRank) {
    return (
        <Container fluid className="card-rank-container mb-2">
            <Row className="d-flex h-100 p-3 px-5 justify-content-between flex-direction-col">
                <Col xs={2} className="card-rank-position">
                    { props.Rank }
                </Col>
                <Col xs={6} className="card-rank-team">
                    { props.Name }
                </Col>
                <Col className="card-rank-points text-center">
                    { props.Points }
                </Col>
            </Row>
        </Container>
    )
}