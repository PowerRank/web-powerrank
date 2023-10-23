import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '~/assets/images/poro-logo.png'

export default function Header() {

    return (
        <Navbar expand="sm" className="navbar-dark p-3">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    width="40"
                    height="40"
                    alt="PoroRank"
                />{' '}
                PoroRank
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-start flex-grow-1">
                    <Nav.Link href="/world-ranking">World Ranking</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}