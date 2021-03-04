import React from 'react';


const validation = (props) => {
    return (
        <div>
            {
                props.inputLength > 5 ?
                    <p> Text long enough for checking</p> :
                    <p> Text to short enough for checking</p>

            }
        </div>
    )
}

export default validation;