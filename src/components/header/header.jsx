import React from 'react';
import { Nav } from 'react-bootstrap';

import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: props.title,
            activeTab: true,
            tabval: this.props.dataFromParent
         }
    }

    handleTabClick = e => {
        this.setState({
            tabval: e.target.hash,
            activeTab: true
        }, this.props.parentCallback(e.target.hash))
        
    }

    render() { 
        return (
           
           <header>
                <Nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
                    <div className='container-fluid'>
                    {
                    this.state.title === 'DETAILS PAGE' ?
                    (<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item' onClick={this.handleTabClick}><a className={(this.state.tabval === '#tab1') ? 'active' : ''} href="#tab1">Tab1</a></li>
                        <li className='nav-item' onClick={this.handleTabClick}><a className={(this.state.tabval === '#tab2') ? 'active' : ''} href="#tab2">Tab2</a></li>
                    </ul>)
                    : 
                    null 
                    }
                    
                    <h1 className='navbar-brand'>{this.state.title}</h1>
                    </div>
                </Nav>
            </header>
         );
    }
}
 
export default Header;