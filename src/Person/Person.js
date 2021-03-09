import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
        width: 60%;
        margin: 15px auto;
        border: 2px solid #eee;
        box-shadow: 0 3px 5px #ccc;
        padding: 15px;
        text-align: center;

        @media (min-width: 500px) {
            width: 450px;
        }
        `;


const person = (props) => {
    const person = (props) => {
        const style = {
                '@media (min-width: 500px)' : {
                    width: '450px',
                }
            };
    }


        return (
        <StyledDiv>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </StyledDiv>
            // <div className="Person">
        // </div>

    )
};
export default person;