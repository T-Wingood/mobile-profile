import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/profilepage.css'

const ProfilePage = (props) => {
    return ( 
        <>
    <div className="outer-container">
            <Container className="inner-container">
                <Row className="container-row">
                    <Col className="column left-Col">
                        <h1 className="profile-header">VT Home APP</h1>
                        
                    </Col>
                </Row>
            </Container>
        </div>

        <Link to={"/"}>
        <Button className='placeholder'>returntohome</Button>
        </Link>
        </>
     );
}
 
export default ProfilePage;