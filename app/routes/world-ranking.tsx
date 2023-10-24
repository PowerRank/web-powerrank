import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import worldRankStyles from "../styles/world-ranking/index.css"

export let links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: worldRankStyles }];
};

export default function WorldRankingRoute() {
    return (
        <Container className="p-5">
            <Row>
                <div className="pb-3 container-title">
                    WORLD RANKING
                </div>
            </Row>
            <Row>
                <Container className="filter-container">
                    {/* <p className="filter-label">
                        <a
                            className="filter-link"
                            href="/world-ranking/events"
                        >
                            Events
                        </a>
                    </p> */}
                    <p className="filter-label">
                        <a
                            className="filter-link"
                            href="/world-ranking/teams"
                        >
                            Teams
                        </a>
                    </p>
                </Container>
            </Row>
            <Row className="row-scrollable">
                <Outlet />
            </Row>

        </Container>
    )
}