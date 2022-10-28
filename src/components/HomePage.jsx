import "../style/homepage.css"
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Homepage = (props) => {
    return ( 
    <>
    <div className="outer-container">
        <Container className='inner-container'>
            <Row className='container-row'> 
                <Col className='column left-col'>
                    <Link to={"/ProfilePage"}>
                        <Button className='button my-profile-button'>My Profile</Button>
                    </Link>
                </Col>
                <Col className='column right-col'>
                    <Link to={"/Settings"}>
                        <Button className='button settings-button'>Settings</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
    </> 
    );
}
 
export default Homepage;