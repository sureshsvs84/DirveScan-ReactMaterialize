import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/dashboard/dashboard';
import NotFound from '../views/404/notFound';
import CustomerInformationView from '../views/customerInformation/customerInformationView';
import OrderView from '../views/order/orderView';
import InsuranceView from '../views/insurance/insuranceView';
import VehicleCheckinView from '../views/vehicleCheckin/vehicleCheckinView';
import VehicleConditionView from '../views/vehicleCondition/vehicleConditionView';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={InsuranceView} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/insurance' component={InsuranceView} />
        <Route path='/order' component={OrderView} />
        <Route path='/customerInfo' component={CustomerInformationView} />
        <Route path='/vehicleCheckin' component={VehicleCheckinView} />
        <Route path='/vehicleCondition' component={VehicleConditionView} />
        <Route path='*' component={NotFound} />
    </Switch>
);

export default Routes;