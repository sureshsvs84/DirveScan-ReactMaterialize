import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
class Dashboard extends React.Component {
    render() {
       return (
          <section>
             <Card className='white'  title='Edit Profile'>
               <Col s={12}>
               <Row>
                  <Input type="text" s={12} m={5} label="Insurance Company" />
                  <Input type="text" s={12} m={3} label="House no. or mailbox" />
                  <Input type="email" s={12} m={4} label="Email address" />    
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="Adjuster Name" />
                  <Input type="text" s={12} m={3} label="Insurance Number" />
                  <Input type="email" s={12} m={3} label="Claim number" />  
                  <Input type="email" s={12} m={3} label="Deductible" />    
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="City" />
                  <Input type="text" s={12} m={3} label="Country" />
                  <Input type="email" s={12} m={3} label="Postal Code" />  
                  <Input type="email" s={12} m={3} label="Phone No" />    
               </Row>
               <Col s={12} className="center">
               <Button waves='light'>Update Insurance</Button>
               </Col>
              
           </Col>
    </Card>
           
          </section>
           
       )
    }
 }

export default Dashboard;