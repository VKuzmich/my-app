import  React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> Rendon name: {props.userName}</p>
            <p>One more tasks</p>
        </div>
    )

}

export default userOutput;