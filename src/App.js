import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import img from './logo-app.png';
import LoadingScreen from 'react-loading-screen'
import MapContainer from './components/map/map.js';

const style = {
  img:{
    width:"40vh",
    height:"40vh",

  }
}

class App extends Component {
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:false});
    },3000);  
  }
  state ={
    loading:true
  } 

  render() {
    
    return (       
      <div>
      
        <LoadingScreen
        loading={this.state.loading}
        bgColor='linear-gradient(orange,yellow)'
        spinnerColor='#red'
        textColor='#676767'
        logoSrc={img}
        text={"Conectando ao Universo"}
        />
      
      
    <MapContainer/>
    </div>
    );
  }
}

export default App;
