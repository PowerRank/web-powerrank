import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import footerLogo from '~/assets/images/footer-logo.png'

export default function Footer() {
    return (
        <Container fluid className="footer p-4">
            <Row>
                <Col xs={12} sm={6} className="p-2">
                    <img
                        src={footerLogo}
                        alt="League of Legends"
                        className="footer-logo"
                        width="50%"
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