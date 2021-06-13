import React from "react";
import { connect } from "react-redux";

import '../App.css'

const UserInputs = ({ addons }) => (
    <div>
        <ul>
            {addons && addons.length
            ? addons.map((addon, index) => {
                return <li key={addon.id} id="user-inputs">{addon.content}</li>;
                })
            : "No User Input!"}
        </ul>
    </div>
);


const mapStateToProps = state => {
    console.log(state);
    const { byIds, allIds } = state.addons || {};
    const addons = 
        allIds && allIds.length
        ? allIds.map(id => (byIds ? {...byIds[id], id} : null))
        : null;
    return { addons };
}

export default connect(mapStateToProps)(UserInputs);

