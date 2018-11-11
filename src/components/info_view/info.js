import React, { Component } from 'react';


const style={
    style:{
        backgroundColor:"rgb(244,244,244)",
        height:"20vh",
        width:"40vh",
        position:"fixed",
        float:"left",
        zIndex:"10",
        borderRadius:"2vh",
        marginTop:'1vh',
        marginLeft:"1vh",
        text:{
            marginLeft:"2vh",
            marginTop:"1vh",
            textAlign:"left",
            textAlignVertical:"center",
            fontFamily: 'Roboto Mono, monospace'
        }   
    }
}

class Info extends Component {
    
    render() {
        return (
            <div style ={style.style}className="container">

                <p style={style.style.text}>Loja: {this.props.nome}</p>
                <p style={style.style.text}>Categoria: {this.props.categoria}</p>
                <p style={style.style.text}>Horario: {this.props.funcionamento}</p>
            </div>
        );
    }

}


export default Info;