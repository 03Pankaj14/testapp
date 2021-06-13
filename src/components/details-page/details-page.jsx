import React from 'react';
import Header from '../header/header';
import SideNav from '../sidenav/sidenav';
import UserInputs from '../user-inputs';

import { connect } from "react-redux";
import { addInput } from "../../redux/actions";

import './details-page.css';

class DetailsPage extends React.Component {
    state = { 
        title : "DETAILS PAGE",
        subtitle : "My Details",
        tabval: '#tab1',
        inpval: ''
     }

    handleTab = data => {
        this.setState({ 
            tabval: data,
            inpval: ''
        });
    }

    handleSubmit = e => {
        this.props.addInput(this.state.inpval);

        this.setState({inpval: ''});
        // this.setState({ 
        //     inpval: this.state.inpval,
        //     tabval: '#tab2'
        // });
        // this.setState({
        //     inpval: '',
        //     tabval: '#tab2'
        // });
        
    }

    handleChange = e => {
        this.setState({ inpval: e.target.value});
    }

    render() { 
        return ( 
            <React.Fragment>
            <Header
                    title={this.state.title} 
                    dataFromParent={this.state.tabval} 
                    parentCallback={this.handleTab}
            />
            <SideNav/>
            {
                this.state.tabval === '#tab1' ? 
                <div>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inpval}
                    />
                    <button className="add-todo" onClick={this.handleSubmit}>
                        Add Todo
                    </button>
                    <span></span>
                </div>
                : <UserInputs/>
            }
            
            </React.Fragment>
         );
    }
}
 
export default connect(null, {addInput})(DetailsPage);


