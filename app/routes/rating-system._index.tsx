import { Container, Row } from "react-bootstrap"

export default function RatinSystemIndexRoute() {
    return (
        <Container className="p-5">
            <Row>
                <h4>
                    Rating System
                </h4>
                <div>The Glicko-2 rating system is used to calculate the ratings.<br/><br/><br/></div>
                
                <div>Here are some things to note:</div>
                <div>- The initial rating is 1500<br/><br/></div>
                <div>- For World Chamionships and Mid-season Invitationals a bonus value constant of 20 is multiplied by the number of games won and added on to the rating.<br/><br/></div>
                <div>- A League bonus is determined by multiplying a bonus constant of 7 by a number associated with the league, where: <br/>PCS,VCS,CBLOL,LJL,LLA=0, <br/>LCS=1, <br/>LEC=2, <br/> and LPL,LCK=3<br/><br/></div>
                <div>- We chose a constant Tau=0.8 due to the probable nature of game outcomes.<br/><br/></div>
                <div>- Ratings are calculated after each game.<br/><br/></div>
            </Row>
        </Container>
    )
}