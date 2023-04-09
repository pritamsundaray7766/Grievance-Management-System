import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardHeader, Col,Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { loginUser } from '../Services/userServices';
import { doLogin } from '../Authentication/Logauth';
import Base from './Base'


const Login=()=> {
  const [loginDetail,setloginDetail] = useState({
    email:'',
    password:'',
   
  })
  const handleChange=(event,field) =>{
    let actualValue = event.target.value
    setloginDetail({
      ...loginDetail,
      [field]:actualValue
    })
  }
  const handleReset = ()=>{
    setloginDetail({
      email:'',
      password:'',
    });
  };
  const handleFormSubmit =(event)=>{
    event.preventDefault();
    console.log(loginDetail);
    //Validation
    if(loginDetail.email.trim()==='' || loginDetail.password.trim()===''){
      toast.error("Username or Password is Required !!")
      return;
    }
    //submit the data to server to generate token
    loginUser(loginDetail).then((data)=>{
      // console.log("User Login: ")
      console.log(data)

      //save the data to localStorage
      doLogin(data,()=>{
        console.log("login details is saved to locastorage..")
      })
      toast.success("Login Success")
    }).catch(error =>{
      console.log(error)
      if(error.response.status===400 || error.response.status===404){
        toast.error(error.response.data.message)
      }else{
        toast.error("Something went wrong on server !!")

      }
    })
  };

  return (
<Base>
      <div>
      <Row className='mt-4'>
        <Col sm={{size: 6, offset:3}} >
          <Card color='dark' inverse>
            <CardHeader>
              <h3>Login Here !!</h3>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                  <Label for='email'>Enter Email</Label>
                  <Input type='email'  placeholder='Enter here'
                   id='email' 
                  value={loginDetail.email}
                  onChange={(e) => handleChange(e,'email')}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='password'>Enter Password</Label>
                  <Input type='password' placeholder='Enter here' 
                  id='password'
                  value={loginDetail.password}
                  onChange={(e) => handleChange(e,'password')}
                   />
                </FormGroup>
                <div className="text-center">
                  <Button outline color='light' >Login</Button>
                  <Button onClick ={handleReset}outline color='secondary'type='reset' className='ms-2' >Reset</Button>
                </div>
                <div className="text-center mt-2">
                  Don't have an account. <Button color="info" outline size="sm" href="/signup" tag="a"> Sign Up </Button> here!!
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
export default Login;