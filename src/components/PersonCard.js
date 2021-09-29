// import React, {Component} from 'react';

// class PersonCard extends Component{
//     state ={
//         firstName: this.props.firstName,
//         lastName: this.props.lastName,
//         age: this.props.age,
//         hairColor: this.props.hairColor,
//         birthdayButton: this.props.age + 1   
//     }
    
//     handleIncrement = () => {
//         this.setState({
//             Number: this.setState + 1
//         })
//     }
    
//     render(){
//         return(
//         <>
//         <div className = "card">
//             <h2 className="card_title"> {this.props.firstName}, {this.props.lastName} </h2>
//             <p className= "card_description" > {this.props.age} </p>
//             <p className= "card_description" > {this.props.hairColor} </p>
//             <button className = "btn" onClick = {this.handleIncrement}> Agregar </button>
            

//         </div>
//         </>
//         )
//     }
// }

// export default PersonCard;

import React, { useState } from 'react';

const PersonCard = ({lastName, firstName, age, hairColor, birthDay}) => {
 
    const [edad, setEdad] = useState(age)

    const añoUsuario = () =>{
        setEdad(edad + 1)
    }

    return (
        <div>
            <h1> {lastName}, {firstName} </h1>
            <p>Age: {edad}</p>
            <p> Hair Color: {hairColor}</p>
            <p> Año de Nacimiento: {birthDay = 2021 - {Date} } </p>
            <button className = "btn" onClick = {añoUsuario} >Birthday</button>

            
        </div>
    );
}

export default PersonCard;
