import React, { Component } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Base from '../Component/Base';
import img1 from '../Images/cutm2.jpg';



export default class Disclaimer extends Component {
  render() {
    return (
      <Base>
    
      <Card className= "mt-8" body color='warning' outline>
        <CardImg alt="Card image cap" src={img1} style={{height: 370}} top width="80%"/>
          <CardBody>
          <CardTitle tag="h5"  className='text-center'>
            Disclaimer
          </CardTitle>
          <CardText>
          The information and services may contain bugs, errors, problems or other limitations. We and our affiliated parties have no liability whatsoever for your use of any information or service. In particular, but not as a limitation thereof, we and our affiliated parties are not liable for any indirect, special, incidental or consequential damages (including damages for loss of business, loss of profits, litigation, or the like), whether based on breach of contract, breach of warranty, tort (including negligence), product liability or otherwise, even if advised of the possibility of such damages. The negation of damages set forth above are fundamental elements of the basis of the bargain between us and you. This site and the information would not be provided without such limitations. No advice or information, whether oral or written, obtained by you from us through the site shall create any warranty, representation or guarantee not expressly stated in this agreement.
          </CardText>
          
          </CardBody>
        </Card>
      </Base>
       
    )
  }
}
