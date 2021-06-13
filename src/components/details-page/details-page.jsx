import React from 'react';
import Header from '../header/header';
import SideNav from '../sidenav/sidenav';

import { connect } from "react-redux";
import { addInput } from "../../redux/actions";
import addons from '../../redux/reducers/addons';

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
            tabval: data
        });
    }

    handleSubmit = e => {
        this.props.addInput(this.state.inpval);

        this.setState({inpval: ''});
        // this.setState({ 
        //     inpval: this.state.inpval,
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
            <Header title={this.state.subtitle}/>
            <SideNav />
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
                </div>
                : <div>
                    <ul>
                    {addons && addons.length
                    ? addons.map((addon, index) => {
                        return <li key={index}>{addon.content}</li>;
                        })
                    : "No User Input!"}
                    </ul>
                </div>
            }
            
            </React.Fragment>
         );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { addons : state };
}
 
export default connect(mapStateToProps, {addInput})(DetailsPage);




// const mapStateToProps = state => {
//     const { byIds, allIds } = state.addons || {};
//     const addons = 
//         allIds && allIds.length
//         ? allIds.map(id => (byIds ? {...byIds[id], id} : null))
//         : null;
//     return { addons };
// }
