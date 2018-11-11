import React, { Component } from 'react';


const style = { 
    style:{
        marginLeft:"1vh",
        width:'30vh',
        height:"65vh",
        marginTop:"28vh",
        backgroundColor:"gray",
        zIndex:"11",
        position:"fixed",   
        float:"left",
        borderRadius:"4vh",
        text:{
            fontSize:"2vh",
            fontFamily:"fontFamily: 'Roboto Mono, monospace'"
        }

    }
}
class SideBar extends Component {
    
    state = {
        cupons:[]
    }

    componentDidMount(){
    }

      render() {
        return (
            <div>
                <aside style={style.style}>
                    <div>
                        <ul>
                        {this.props.cupons.map((cupom)=>{
                            if(cupom != null){
                                console.log(cupom);
                                return <li style={style.style.text}>
                                <p>{cupom.name}</p>
                                <p>Código: {cupom.codigo}</p>
                                <p>Desconto: {cupom.desconto}</p>
                            </li>    
                            }
                        })}
                        </ul>
                    </div>   
                </aside>
            </div>
        );
      }
    }
  


export default SideBar;
