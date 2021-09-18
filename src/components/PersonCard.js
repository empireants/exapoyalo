import React, {Component} from 'react';

class PersonCard extends Component{
    state ={
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        age: this.props.age,
        hairColor: this.props.hairColor

    }

    render(){
        return(
        <>
        <div className = "card">
            <h2 className="card_title"> {this.props.firstName}, {this.props.lastName} </h2>
            <p className= "card_description" > {this.props.age} </p>
            <p className= "card_description" > {this.props.hairColor} </p>

        </div>
        </>
        )
    }
}

export default PersonCard;
