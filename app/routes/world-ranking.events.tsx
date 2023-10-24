import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import CardRankGrid from "~/components/card-rank-grid";
import CardFilterGrid from "~/components/card-filter-grid";

const sampleRanks = [
    {
        position: 1,
        name: "Cloud 9",
        points: 1801
    },
    {
        position: 2,
        name: "TSM",
        points: 1802
    },
    {
        position: 3,
        name: "T1",
        points: 1803
    },
    {
        position: 4,
        name: "LDG",
        points: 1804
    },
    {
        position: 5,
        name: "Gen G.",
        points: 1805
    },
    {
        position: 6,
        name: "NRG",
        points: 1806
    },
    {
        position: 7,
        name: "G2",
        points: 1807
    },
    {
        position: 8,
        name: "FPX",
        points: 1808
    },
    {
        position: 9,
        name: "DRX",
        points: 1809
    },
    {
        position: 10,
        name: "Fnatic",
        points: 1810
    },
]

const sampleEvents = [
    {
        name: "Worlds 2021"
    },
    {
        name: "LCS Spring 2021"
    },
    {
        name: "LPL 2023"
    },
    {
        name: "LEC 2023"
    },
    {
        name: "VCS 2023"
    },
]

export default function WorldRankingEventsRoute() {
    return (
        <Container>
            <Row>
                <Col>
                    <CardFilterGrid
                        filterItems={sampleEvents} />
                </Col>
                <Col>
                    <CardRankGrid
                        ranks={sampleRanks} />
                </Col>
            </Row>
        </Container>
    )
}