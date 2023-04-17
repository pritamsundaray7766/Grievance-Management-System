import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from '../Component/Base';

function AddStakeHolder() {

    let navigate = useNavigate();


    const [stakeholder,setStakeHolder] = useState({
        first_name:"",
        middle_name:"",
        last_name:"",
        stakeholder_type:"",
        contact:"",
        email:"",
        user_name:"",
        password:"",
        account_status:""
    });

    const {first_name,middle_name,last_name,stakeholder_type,contact,email,user_name,password,account_status} = stakeholder;

    const onInputChange=(e) =>{
        setStakeHolder({...stakeholder,[e.target.name]: e.target.value});
    };

    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/stakeholders", stakeholder);
        navigate("/")
    };
  return (
    <Base>
      <div>
      <Row className='mt-4'>
        <Col sm={{size: 6, offset:3}} >
          <Card color='dark' inverse>
            <CardHeader>
              <h3>Register Stakeholder</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={(e) => onSubmit(e)}>
                <FormGroup>
                  <Label for='firstName'>Enter First Name</Label>
                  <Input type={"text"}  placeholder='Enter here'
                  name="first_name"
                  value={first_name}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='middle_name'>Enter Middle Name</Label>
                  <Input type='text' placeholder='Enter here'  
                  name="middle_name"
                  value={middle_name}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='last_name'>Enter Last Name</Label>
                  <Input type='text'  placeholder='Enter here'  
                  name="last_name"
                  value={last_name}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='stakeholder_type'>Enter Stakeholder Type</Label>
                  <Input type='text' placeholder='Enter here'  
                  name="stakeholder_type"
                  value={stakeholder_type}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='contact'>Enter Contact Number</Label>
                  <Input type='number'  placeholder='Enter here'  
                  name="contact"
                  value={contact}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='email'>Enter Email ID</Label>
                  <Input type='email' placeholder='Enter here'  
                  name="email"
                   value={email}
                   onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='user_name'>Enter User Name</Label>
                  <Input type='text'  placeholder='Enter here'  
                  name="user_name"
                   value={user_name}
                   onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Enter Password</Label>
                  <Input type='password' placeholder='Enter here'  
                  name="password"
                   value={password}
                   onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='account_status'>Enter Account Status</Label>
                  <Input type='text' placeholder='Enter here'  
                  name="account_status"
                  value={account_status}
                  onChange={(e)=>onInputChange(e)}
                  />
                </FormGroup>
                <div className="text-center">
                  <Button type="submit" outline color='light' className="btn btn-outline-primary" >
                    Submit
                    </Button>
                    <Button type="submit" outline color='light' className="btn btn-outline-danger">
                    Cancel
                    </Button>
                </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </div>
</Base>
  )
}

export default AddStakeHolder
