import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
class VehicleCheckin extends React.Component {
    render() {
       return (
          
             <Card className='white'  title='Edit Vehicle Check-in'>
               <Col s={12}>
               <Row>
                  <Input type="text" s={12} m={3} label="Chassis number (VIN)" />
                  <Input type="text" s={12} m={3} label="DAT € Code" />
                  <Input type="text" s={12} m={3} label="Manufacturer" />
                  <Input type="text" s={12} m={3} label="Model" />     
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="Main Type" />
                  <Input type="text" s={12} m={3} label="Sub Type" />
                  <Input type="text" s={12} m={3} label="Registration Plate" />  
                  <Input type="text" s={12} m={3} label="Key number (KBA)" />    
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="Colour" />
                  <Input type="text" s={12} m={3} label="Power (kW)" />
                  <Input type="text" s={12} m={3} label="Horsepower(PS)" />  
                  <Input type="text" s={12} m={3} label="Displacement (ccm)" />    
               </Row>
               <Row>
                  <Input type="text" s={12} m={3} label="Transmission" />
                  <Input type="text" s={12} m={3} label="First Admission" />                  
                  <Input type="text" s={12} m={3} label="Last admission" /> 
                  <Input type="text" s={12} m={3} label="Manufacturing year" />     
               </Row>
               <Col s={12} className="center">
               <Button waves='light'>Update Insurance</Button>
               </Col>
              
           </Col>
    </Card>
        
           
       )
    }
 }

export default VehicleCheckin;