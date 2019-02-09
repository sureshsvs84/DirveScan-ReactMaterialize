import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
import Order from '../../components/appComponent/order/order';
class OrderView extends React.Component {
    render() {
       return (          
             <Order/>
       )
    }
 }

export default OrderView;