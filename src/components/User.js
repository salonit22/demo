import React from 'react';

class User extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                <h1>name : {this.props.name}</h1>
                <p>location : chennai</p>
                <p>contact : @saloni_tyag</p>
                <p>count {this.state.count}</p>
                <button onClick = {() => {
                    this.setState({ count: this.state.count + 1}) 
                }}>click me</button>
            </div>
        );
    }
}

export default User