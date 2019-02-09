import React from 'react';
import ReactDom from 'react-dom';
import {Card, Col,Input,Row,Button} from 'react-materialize'
import CustomerInformation from '../../components/appComponent/customerInformation';
class CustomerInformationView extends React.Component {
    render() {
       return (
          <CustomerInformation/>           
       )
    }
 }

export default CustomerInformationView;