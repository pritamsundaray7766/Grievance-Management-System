import React from 'react'

import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Base from './Base'

export default function Complaint() {
  return (
 <Base>
  <div>
    <Row className='mt-4'>
      <Col sm={{size: 6, offset:3}} >
        <Card color='dark' inverse>
          <CardHeader>
            <h3>Fill Information to Complain !!</h3>
          </CardHeader>
          <CardBody>
            <Form >
              <FormGroup>
                <Label for='comaplaint_name'>Complaint Title</Label>
                <Input type='text' placeholder='Enter here' id='comaplaint_name' />
              </FormGroup>
              <FormGroup >
              <Label for="File">Select Category </Label>
                <Input type="select">
                <option selected>Choose...</option>
                <option value="1">GENERAL MAINTANCE</option>
                <option value="2">ELECTICAL MAINTANCE</option>
                <option value="3">IT & NETWORK</option>
                <option value="4">ERP Assist</option>
                <option value="5">Womens Grievance</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for='description'>Complaint description</Label>
                <Input type='text' placeholder='Enter here' id='description' />
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" ></Label>
                  <Col >
                    <Input id="exampleFile" name="file" type="file"/>
                  </Col>
                </FormGroup>
              <div className="text-center">
                <Button outline color='light' type='submit'>Submit</Button>
                <Button outline color='secondary'type='reset' className='ms-2' >Reset</Button>
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
