import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
import VehicleCondition from '../../components/appComponent/vehicleCondition';
class VehicleConditionView extends React.Component {
    render() {
       return (
        
            <VehicleCondition/>         
       )
    }
 }

export default VehicleConditionView;