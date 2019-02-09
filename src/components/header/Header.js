import React, { Component } from 'react';
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
     const name = this.props.name;
     const link = this.props.onClick;
        return(
          <nav class="navbar navbar-default box-shadow-off">
          <div class="container-fluid">
              <div class="navbar-header left">
                  <button type="button" class="navbar-toggle">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar bar1"></span>
                      <span class="icon-bar bar2"></span>
                      <span class="icon-bar bar3"></span>
                  </button>
                  <a class="navbar-brand" href="#">Insurance Profile</a>
              </div>
              <div class="collapse navbar-collapse right">
                  <ul class="nav navbar-nav navbar-right">
                      <li>
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                              <i class="ti-panel"></i>
                              <p>Stats</p>
                          </a>
                      </li>
                      <li class="dropdown">
                          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                              <i class="ti-bell"></i>
                              <p class="notification">5</p>
                              <p>Notifications</p>
                              <b class="caret"></b>
                          </a>
                          <ul class="dropdown-menu">
                              <li><a href="#">Notification 1</a></li>
                              <li><a href="#">Notification 2</a></li>
                              <li><a href="#">Notification 3</a></li>
                              <li><a href="#">Notification 4</a></li>
                              <li><a href="#">Another notification</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="#">
                              <i class="ti-settings"></i>
                              <p>Settings</p>
                          </a>
                      </li>
                  </ul>

              </div>
          </div>
      </nav>
       )
   }
   
} 

export default Header;