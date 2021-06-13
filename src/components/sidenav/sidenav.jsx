import React from 'react';
//import './drag';

import './sidenav.css';

class SideNav extends React.Component {
    state = {  }

    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "./drag.js";
    //     script.async = true;
    //     script.onload = () => this.scriptLoaded();

    //     document.body.appendChild(script);

    // }

    render() { 
        return ( 
            <React.Fragment>
            <div className='sidebar'>
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
            <div id="resize"></div>
            <div className="content">
                
            </div>
            
            </React.Fragment>
         );
    }
}
 
export default SideNav;