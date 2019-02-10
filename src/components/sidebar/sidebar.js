import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-materialize';
class SiderBar extends React.Component{
     render(){
         const { isSideBar } = this.props;
        return(
            <div className={isSideBar ? 'sidebar' :' sidebar sideBarOff' } data-background-color="white" data-active-color="danger">

            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="#" className="simple-text">
                        driveScan
                    </a>
                </div>

                <ul className="nav">
                    <li>
                     <NavLink to={'/dashboard'}>
                            <i className="material-icons">dashboard</i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/customerInfo">
                            <Icon className="material-icons">account_circle</Icon>
                            <p>Customer Info</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">
                        <Icon className="material-icons">local_grocery_store</Icon>
                            <p>Order</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/insurance">
                            <i className="material-icons">business_center</i>
                            <p>Insurance</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vehicleCheckin">
                            <i className="material-icons">drive_eta</i>
                            <p>Vehicle CheckIn</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/vehicleCondition">
                            <i className="material-icons">rv_hookup</i>
                            <p>Vehicle Condition</p>
                        </NavLink>
                    </li>
                
                    <li>
                        <NavLink to="/">
                            <i className="material-icons">alternate_email</i>
                            <p>Contact Us</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default SiderBar; 
