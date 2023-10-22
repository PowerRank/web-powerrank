import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '~/assets/images/poro-logo.png'
import leagueLogo from '~/assets/images/LoL_Logo_Flat_WHITE.png'

export default function Footer() {
    return (
        <Container fluid className="footer p-4">
            <Row>
                <Col xs={12} sm={6} className="p-2">
                    <img
                        src={leagueLogo}
                        alt="League of Legends"
                        width="30%"
                    />
                </Col>
                <Col xs={12} sm={6} className="p-2 align-self-end">
                    <div id="copyright">
                        © Riot Games. All Rights Reserved.
                    </div>
                </Col>
            </Row>
        </Container>
    );
}