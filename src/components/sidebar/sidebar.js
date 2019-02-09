import React from 'react';
class SiderBar extends React.Component{
    render(){
        return(
            <div class="sidebar" data-background-color="white" data-active-color="danger">

            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="#" class="simple-text">
                        driveScan
                    </a>
                </div>

                <ul class="nav">
                    <li>
                        <a href="#">
                            <i class="ti-panel"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li>
                        <a href="/customerInfo">
                            <i class="ti-user"></i>
                            <p>Customer Info</p>
                        </a>
                    </li>
                    <li>
                        <a href="/order">
                            <i class="ti-briefcase"></i>
                            <p>Order</p>
                        </a>
                    </li>
                    <li class="active">
                        <a href="/insurance">
                            <i class="ti-view-list-alt"></i>
                            <p>Insurance</p>
                        </a>
                    </li>
                    <li>
                        <a href="/vehicleCheckin">
                            <i class="ti-text"></i>
                            <p>Vehicle CheckIn</p>
                        </a>
                    </li>
                    <li>
                        <a href="/vehicleCondition">
                            <i class="ti-pencil-alt2"></i>
                            <p>Vehicle Condition</p>
                        </a>
                    </li>
                
                    <li class="active-pro">
                        <a href="#">
                            <i class="ti-export"></i>
                            <p>Contact Us</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SiderBar; 
