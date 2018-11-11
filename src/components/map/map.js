import React from 'react';
import { Polygon,Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';
import Info from '../info_view/info.js';
import Info_Footer from '../info_view/info_footer.js';
import icon from './user.png';
import { throws } from 'assert';
import Sidebar from '../sidebar/sidebar.js';





export class MapContainer extends React.Component {

    state ={
        markers:[],
        client:{
            lat:null,
            lng:null
        },
        footer:{
            nome:null,
            horario:null,
            categoria:null,
            display:'inline',
            
        }
    }
    
    clickInfoLoja(props){
        this.setState({footer:{nome: props.name,categoria: props.categoria,horario: props.funcionamento}});
        
    }

    removeInfoLoja(){
        this.setState({footer:{display:'none'}});
        
    }


    
    componentDidMount(){
        axios.get('http://7ad9f341.ngrok.io/api/lojas').then((data)=>{
            this.setState({markers:data.data.data});
            console.log(this.state);
        });
        
        let a = -0.0000001;
        let b = 0.01;

        setInterval(()=>{
        
            navigator.geolocation.getCurrentPosition((loc)=>{
                
                
                this.setState({client:{lat:loc.coords.latitude-a, lng:loc.coords.longitude+b }});
                });      
              a -= 0.05;
              b +=0.05;
              
            },3500);

          
    }
    
    
    render() {
    
        const triangleCoords = [
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
    ];

    return (
     
        
      <Map google={this.props.google} initialCenter={{
        lat: -12.946036,
        lng: -38.413762
      }} zoom={10}  onClick={()=> this.removeInfoLoja()}>
      
      <Sidebar></Sidebar>
      <Info_Footer nome={this.state.footer.nome} categoria={this.state.footer.categoria} display={this.state.footer.display} horario={this.state.footer.horario} />      

            {this.state.markers.map((marker)=>{
                return <Marker onClick={() => this.clickInfoLoja(marker)} key={marker.id} title={marker.name}
                name={marker.name} categoria={marker.categoria} funcionamento={marker.funcionamento}
                position={{lat: marker.lat, lng: marker.lng}} />
                  
                
            })}
            <Marker name={'voce'} title={'voce'} position={{lat:this.state.client.lat,lng:this.state.client.lng}  } icon= {icon}/>
            

      </Map>
            

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCRDmUJb-xn4AUIvqWhUefHiVw-TIa5w5Q'
})(MapContainer)