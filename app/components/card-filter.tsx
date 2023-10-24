import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useState } from 'react'

import CardFilterProps from "~/interfaces/CardFilterProps"

export default function CardFilter(props:CardFilterProps) {
    const [isActive, setIsActive] = useState(props.IsSelected);
    const handleClick = () => {
        setIsActive(!isActive);
        if(props.OnClick)
            props.OnClick(props.Name)
    }

    return (
        <Container fluid 
            className={`card-rank-container mb-2 ${isActive ? "card-active": ""}`}
            onClick={handleClick}>
            <Row className="h-100 p-3 px-5 justify-content-between">
                <Col xs={6} className="card-rank-team w-100">
                    { props.Name.toUpperCase() }
                </Col>
            </Row>
        </Container>
    )
}