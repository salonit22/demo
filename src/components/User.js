import React from 'react';

class User extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>name : {this.props.name}</h1>
                <p>location : chennai</p>
                <p>contact : @saloni_tyag</p>
            </div>
        );
    }
}

export default User