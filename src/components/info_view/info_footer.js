import React, { Component } from 'react';

const style={
    style:{        
        backgroundColor:"rgb(249,249,249)",
        height:"20vh",
        width:"40vh",
        position:"fixed",
        float:"right",
        zIndex:"10",
        borderRadius:"4vh",
        padding:'1vh',
        marginLeft:"1vh",
        marginTop:"3vh",
        text:{
            marginLeft:"2vh",
            marginTop:"1vh",
            textAlign:"left",
            textAlignVertical:"center",
            fontFamily: 'Roboto Mono, monospace'
        }   
    }
}

class Info_Footer extends Component {
    
    state ={
        nome:null,
        categoria:null,
        horario:null,
        display:'none'
    }



    render() {
        return (
        <div style={{ display:this.props.display ? "none": "inline"}}> 
            <div style ={style.style}className="container">

                <p style={style.style.text}>Loja: {this.props.nome}</p>
                <p style={style.style.text}>Categoria: {this.props.categoria}</p>
                <p style={style.style.text}>Horario: {this.props.horario}</p>
            </div>
        </div>
        );
    }

}


export default Info_Footer;