import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
class Order extends React.Component {
    render() {
       return (          
             <Card className='white'  title='Order Info'>
               <Col s={12}>
               <Row>
                  <Input type="text" s={12} m={5} label="Order Number" />
                  <Input type="date" s={12} m={3} label="Issued on" />
                  <Input type="email" s={12} m={4} label="Email address" />    
               </Row>
               
               <Col s={12} className="center">
               <Button waves='light'>Update Order</Button>
               </Col>
              
           </Col>
    </Card>
           
        
           
       )
    }
 }

export default Order;