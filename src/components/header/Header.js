import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon,Button } from 'react-materialize';
import ReactDom from 'react-dom';
import'./header.scss';
import Brand from '../../../public/assets/images/brandlogo.jpg';
class Header extends Component {  
  constructor(props){
    super(props)
    this.state={
       userName:"suresh",
       lastName:"S"
        }     
 }
     
   render(){    
        return(
          <nav className="navbar navbar-default box-shadow-off">
          <div className="container-fluid">
              <div className="navbar-header left">
              <Button waves='light'flat className="navbar-toggle" onClick={this.props.onClick} > 
                <Icon className="material-icons">menu</Icon>
               </Button>  
                <NavLink to="/" className="navbar-brand" href="#">Insurance Profile</NavLink>
              </div>
              <div className="collapse navbar-collapse right">
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                              <i className="material-icons">settings_input_component</i>
                              <p>Stats</p>
                          </a>
                      </li>
                      <li className="dropdown">
                          <NavLink to="/" className="dropdown-toggle" data-toggle="dropdown">
                              <i className="material-icons">add_alert</i>
                              <p className="notification">5</p>
                              <p>Notifications</p>
                              <b className="caret"></b>
                          </NavLink>
                          <ul className="dropdown-menu">
                              <li><a href="#">Notification 1</a></li>
                              <li><a href="#">Notification 2</a></li>
                              <li><a href="#">Notification 3</a></li>
                              <li><a href="#">Notification 4</a></li>
                              <li><a href="#">Another notification</a></li>
                          </ul>
                      </li>
                      <li>
                          <NavLink to="/">
                              <i className="material-icons">settings</i>
                              <p>Settings</p>
                          </NavLink>
                      </li>
                  </ul>

              </div>
          </div>
      </nav>
       )
   }
   
} 

export default Header;