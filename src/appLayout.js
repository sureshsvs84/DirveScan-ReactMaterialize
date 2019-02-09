import React, { Component } from 'react';
import { render } from 'react-dom';
import AutoBind from 'react-autobind';
import "../public/assets/scss/style.scss";
import Routes from './routes/mainRoute';
import Header from './components/header/header';
import SideBar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';

class App extends Component {  
    constructor(){
        super();
        this.state={}
        AutoBind(this)
      }
    render() {
        return (
        <div className="wrapper">
          <SideBar/>
          <div class="main-panel">
          <Header name="Customer Lifecycle Management" onClick={this.handleClick}></Header>             
        
          <div class="content">
             <div class="container-fluid">
          <Routes/>
          </div>
          </div>
        <Footer/>
      
      </div>
      </div>
        );
    }

    handleClick(e){
        e.preventDefault();
        this.setState({
            isVisableAsideLeft:!this.state.isVisableAsideLeft
        })
      }
} 

export default App;
