import { Button, Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/settings.css'

const Settings = (props) => {

    const [displayName, setDisplayName] = useState ("")
    const [titleOne, setTitleOne] = useState("")
    const [titleTwo, setTitleTwo] = useState("")
    const [phoneNumber, setPhoneNumber] = useState ("")
    const [email, setEmail] = useState ("")
    const [profilePicture, setProfilePicture] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [twitter, setTwitter] = useState("")
    const [orcid, setOrcid] = useState("")
    const [myResearch, setMyResearch] = useState("")


    async function handleSettingSubmit(e){
        e.preventDefault()
    }
    return ( 
    <>
    <div className="outer-container">
            <Container className="inner-container">
                <Row className="container-row">
                    <Col className="column left-col">
                        <div className="column-info left-col-info">
                            <h1>User Details</h1>
                            <Form className="form">
                                <FormGroup>
                                    <Label for = "displayname" className="labelfield displayname-labelfield">Display Name</Label>
                                    <Input
                                        className="inputbox displayname-inputbox"
                                        type = "text"
                                        name = "displayname"
                                        id = "displayname"
                                        placeholder = "Display Name"
                                        onChange={(e)=>setDisplayName(e.target.value)}
                                    />
                                    <Label for = "title-one" className="labelfield title-one-labelfield">Title</Label>
                                    <Input
                                        className="inputbox title-one-inputbox"
                                        type = "text"
                                        name = "title-one"
                                        id = "title-one"
                                        placeholder = "Title"
                                        onChange={(e)=>setTitleOne(e.target.value)}
                                    />
                                    <Label for = "title-two" className="labelfield title-two-labelfield">Title</Label>
                                    <Input
                                        className="inputbox title-two-inputbox"
                                        type = "text"
                                        name = "title-two"
                                        id = "title-two"
                                        placeholder = "Title"
                                        onChange={(e)=>setTitleTwo(e.target.value)}
                                    />
                                    <Label for = "phone-number" className="labelfield phone-number-labelfield">Phone number</Label>
                                    <Input
                                        className="inputbox phone-number-inputbox"
                                        type = "text"
                                        name = "phone-number"
                                        id = "phone-number"
                                        placeholder = "Phone number"
                                        onChange={(e)=>setPhoneNumber(e.target.value)}
                                    />
                                    
                                    <Label for = "email" className="labelfield email-labelfield">Email</Label>
                                    <Input
                                        className="inputbox email-inputbox"
                                        type = "email"
                                        name = "email"
                                        id = "email"
                                        placeholder = "Email"
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />

                                    <Label for = "linked-in" className="labelfield linked-in-labelfield">linked-in</Label>
                                    <Input
                                        className="inputbox linked-in-inputbox"
                                        type = "text"
                                        name = "linked-in"
                                        id = "linked-in"
                                        placeholder = "linked-in"
                                        onChange={(e)=>setLinkedIn(e.target.value)}
                                    />
                                    <Label for = "twitter" className="labelfield twitter-labelfield">twitter</Label>
                                    <Input
                                        className="inputbox twitter-inputbox"
                                        type = "text"
                                        name = "twitter"
                                        id = "twitter"
                                        placeholder = "twitter"
                                        onChange={(e)=>setTwitter(e.target.value)}
                                    />
                                    <Label for = "orcid" className="labelfield orcid-labelfield">orcid</Label>
                                    <Input
                                        className="inputbox orcid-inputbox"
                                        type = "text"
                                        name = "orcid"
                                        id = "orcid"
                                        placeholder = "orcid"
                                        onChange={(e)=>setOrcid(e.target.value)}
                                    />
                                    <Label for = "my-research" className="labelfield my-research-labelfield">my-research</Label>
                                    <Input
                                        className="inputbox my-research-inputbox"
                                        type = "text"
                                        name = "my-research"
                                        id = "my-research"
                                        placeholder = "my-research"
                                        onChange={(e)=>setMyResearch(e.target.value)}
                                    />
                                    <Label for = "profile-picture" className="labelfield profile-picture-labelfield">Profile-Picture</Label>
                                    <Input
                                        className="inputbox profile-picture-inputbox"
                                        type = "file"
                                        name = "profile-picture"
                                        id = "profile-picture"
                                        placeholder = "profile-picture"
                                        // On Change is upload photo
                                    />
                                    <Button className="button settings-button" onClick={handleSettingSubmit}>Submit</Button>
                                </FormGroup>                              
                            </Form>
                        </div>       
                    </Col>
                    <Col className="column right-Col"></Col>
                </Row>
            </Container>
        </div>

    <Link to={"/"}>
        <Button className='placeholder'>returntohome</Button>
    </Link>
    </> );
}
 
export default Settings;