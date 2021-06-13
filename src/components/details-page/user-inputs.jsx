import React from "react";
import { connect } from "react-redux";

const UserInputs = ({ addons }) => (
    <div>
        <ul>
            {addons && addons.length
            ? addons.map((addon, index) => {
                return <li key={index}>{addon.content}</li>;
                })
            : "No User Input!"}
        </ul>
    </div>
);


const mapStateToProps = state => {
    console.log(state);
    return { addons : state };
}

export default connect(mapStateToProps)(UserInputs);

