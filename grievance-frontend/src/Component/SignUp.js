import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Col,  Form, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap';
import Base from './Base';
// import { signUp } from '../Services/user-service';
import {toast} from 'react-toastify';
import { signUp } from '../Services/userServices';

export default function Signup() {

  const [data,setData] = useState({
        first_name:'',
        middle_name:'',
        last_name:'',
        contact:'',
        email:'',
        password:'',
       

      })

      const[error,setError]=useState({
        errors:{},
        isError:false
      }) 
  
  useEffect(()=>{
    console.log(data);
  },[data])
  // Handle change 
  const handleChange=(event,property)=>{
   setData({ ...data,[property]:event.target.value})

  }
  const resetData=()=>{
    setData({
      first_name:'',
      middle_name:'',
      last_name:'',
      contact:'',
      email:'',
      password:'',
      
    })
  }
  const submitForm=(event)=>{
    event.preventDefault()

    console.log(data);
    signUp(data).then((resp)=>{
      console.log(resp);
      console.log("success log");
      toast.success("User Registered Successfully..")
      setData({
      first_name:'',
      middle_name:'',
      last_name:'',
      contact:'',
      email:'',
      password:'',

      })
    }).catch((error)=>{
      console.log(error);
      console.log("Error log");
      setError({
        errors:error,
        isError:true
      })
    });
  };

  return (
     
  <Base>
    <div>
    <Row className='mt-4 mb-5'>
      <Col sm={{size: 6, offset:3}} >
        <Card color='dark' inverse>
          <CardHeader>
            <h3>Fill Information to Register !!</h3>
          </CardHeader>
          <CardBody>
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for='first_name'>Enter First Name</Label>
                <Input type='text' placeholder='Enter here' id='first_name' 
                onChange={(e)=>handleChange(e,'first_name')}
                value={data.first_name}
                invalid={error.errors?.response?.data?.first_name ? true: false}
                />
                <FormFeedback>
                  {error.errors?.response?.data?.first_name}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for='middle_name'>Enter  Middle Name</Label>
                <Input type='text' placeholder='Enter here' id='middle_name' 
                onChange={(e)=>handleChange(e,'middle_name')}
                value={data.middle_name}
                invalid={error.errors?.response?.data?.middle_name ? true: false}
                />
                <FormFeedback>
                  {error.errors?.response?.data?.middle_name}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for='last_name'>Enter Last Name</Label>
                <Input type='text' placeholder='Enter here' id='last_name'
                onChange={(e)=>handleChange(e,'last_name')}
                value={data.last_name}
                invalid={error.errors?.response?.data?.last_name ? true: false}
                 />
                 <FormFeedback>
                  {error.errors?.response?.data?.last_name}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for='contact'>Contact</Label>
                <Input type='number' placeholder='Enter here' id='contact' 
                onChange={(e)=>handleChange(e,'contact')}
                value={data.contact}
                invalid={error.errors?.response?.data?.contact ? true: false}
                />
                <FormFeedback>
                  {error.errors?.response?.data?.contact}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for='email'>Enter Email</Label>
                <Input type='email' placeholder='Enter here' id='email'
                onChange={(e)=>handleChange(e,'email')}
                value={data.email}
                invalid={error.errors?.response?.data?.email? true: false}
                 />
                 <FormFeedback>
                  {error.errors?.response?.data?.email}
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for='password'>Enter Password</Label>
                <Input type='password' placeholder='Enter here' id='password'
                onChange={(e)=>handleChange(e,'password')} 
                value={data.password}
                invalid={error.errors?.response?.data?.password ? true: false}
                />
                <FormFeedback>
                  {error.errors?.response?.data?.password}
                </FormFeedback>
              </FormGroup>
             
              <div className="text-center">
                <Button outline color='light' >Register</Button>
                <Button outline color='secondary'type='reset' className='ms-2' onClick={resetData}>Reset</Button>
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
