
import PersonCard from './components/PersonCard';

function App() {
  const cards = [
    {
      id:1,
      firstName: "Doe",
      lastName: 'Jane',
      age:45,
      hairColor:'Black',
      birthDay: ''
 
    },
    {
      id:2,
      firstName: "Smith",
      lastName: 'Jhone',
      age:88,
      hairColor:'Brown',
      birthDay: ''
    },
    {
      id:3,
      firstName: "Fillmore",
      lastName: 'Millard',
      age:50,
      hairColor:'Brown',
      birthDay: ''
    },
    {
      id:4,
      firstName: "Smith",
      lastName: 'María',
      age:62,
      hairColor:'Green',
      birthDay: ''
      
    } 

  

  ]

  return (
  
        <div className="container">
            {
              cards.map((cards)=> (
              
               
                  <PersonCard
                  firstName={cards.firstName}
                  lastName={cards.lastName}
                  age={cards.age}
                  hairColor={cards.hairColor}
                  birthDay = {cards.birthDay}
                  />
                  
                  
                  
                
              ))
            }
        </div>
     
 
  );
}

export default App;
