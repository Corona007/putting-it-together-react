import React, { Component } from 'react';

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday button for {props.firstName} {props.lastName} {props.count}</button>
    );
}
class PutComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        const {firstName, lastName, Age, hairColor} = this.props; 
        return (
            <div>
                <h1>{lastName}{firstName} </h1>
                {Age} <br></br>
                {hairColor} <br></br>
                <Button handleClick={this.handleClick} count={this.state.clickCount} firstName={firstName} lastName={lastName}/>
            </div>
        );
    }
}
export default PutComp;