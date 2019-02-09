import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
class VehicleCondition extends React.Component {
    render() {
       return (
        
             <Card className='white'  title='Edit Vehicle Condition'>
               <Col s={12}>
               <Row>
                  <Input type="text" s={12} m={3} label="Type of paint" />
                  <Input type="text" s={12} m={3} label="Paint color" />
                  <Input type="email" s={12} m={3} label="Paint condition" /> 
                  <Input type="text" s={12} m={3} label="General condition" />   
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="Body condition" />
                  <Input type="text" s={12} m={3} label="Mileage read" />
                  <Input type="email" s={12} m={3} label="Mileage estimated" />  
                  <Input type="email" s={12} m={3} label="Next Car Inspection" />    
               </Row>
               <Row>
                  <Input type="textarea" s={12} m={12} label="Remarks" />
                  
               </Row>
               <Col s={12} className="center">
               <Button waves='light'>Update VehicleCondition </Button>
               </Col>
              
           </Col>
    </Card>
         
       )
    }
 }

export default VehicleCondition;