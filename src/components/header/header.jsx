import React from 'react';

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
            <div className="header"> 
                {
                this.state.title === 'DETAILS PAGE' ?
                (<ul>
                    <li onClick={this.handleTabClick}><a className={(this.state.tabval === '#tab1') ? 'active' : ''} href="#tab1">Tab1</a></li>
                    <li onClick={this.handleTabClick}><a className={(this.state.tabval === '#tab2') ? 'active' : ''} href="#tab2">Tab2</a></li>
                  </ul>)
                : 
                null 
                }
                <h1>{this.state.title}</h1>
            </div>
         );
    }
}
 
export default Header;