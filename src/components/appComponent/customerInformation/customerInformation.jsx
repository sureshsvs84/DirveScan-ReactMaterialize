import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
class Dashboard extends React.Component {
    render() {
       return (
     
             <Card className='white'  title='Edit Profile'>
               <Col s={12}>
               <Row>
                  <Input type="text" s={12} m={6} label="Company" />
                  <Input type="text" s={12} m={3} label="Customer Number" />
                  <Input type="email" s={12} m={3} label="Email address" />    
               </Row>
               <Row>
                  <Input type="text" s={12} m={6} label="First Name" />
                  <Input type="text" s={12} m={6} label="Last Name" />                
               </Row>
               <Row>
                  <Input type='textarea' s={12} m={12} label="Address" />
                  <Input type="text" s={12} m={4} label="City" />
                  <Input type="text" s={12} m={4} label="Country" />  
                  <Input type="text" s={12} m={4} label="Postal Code" />    
               </Row>
               <Col s={12} className="center">
               <Button waves='light'>Update Profile</Button>
               </Col>
              
           </Col>
    </Card>
         
       )
    }
 }

export default Dashboard;