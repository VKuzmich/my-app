import React from 'react';


const validation = (props) => {
    let validationMessage = 'Text to long enough'  ;

    if (props.inputLength <= 5) {
        validationMessage = 'Text to short enough';
    }

    return (
        <div>
            <p>{validationMessage}</p>

        </div>
    )
}

export default validation;