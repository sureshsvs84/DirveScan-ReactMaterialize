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
        this.state={
          isOpen:true
        }
        AutoBind(this)
      }
    handleClick = ()=>{      
      this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
        <div className="wrapper">
          <SideBar isSideBar={this.state.isOpen}/>
          <div className={this.state.isOpen ? 'main-panel' :'main-panel full-wdith'}>
          <Header isSideBar={this.state.isOpen} name="Customer Lifecycle Management" onClick={this.handleClick}></Header>             
        
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
