import React, { Component } from 'react';


const style = {
    style:{
        width:'30vh',
        height:"65vh",
        marginTop:"25vh",
        backgroundColor:"light",
        zIndex:"11",
        position:"fixed",   
        float:"left"

    }
}
class SideBar extends Component {
    
      render() {
        return (
            <div>
                <aside style={style.style}>
                    <div>
                        
                    </div>   
                </aside>
            </div>
        );
      }
    }
  


export default SideBar;
