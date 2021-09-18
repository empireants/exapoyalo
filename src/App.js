
import PersonCard from './components/PersonCard';

function App() {
  const cards = [
    {
      id:1,
      firstName: "Doe",
      lastName: 'Jane',
      age:45,
      hairColor:'Black'
      
      
      
    },
    {
      id:2,
      firstName: "Smith",
      lastName: 'Jhone',
      age:88,
      hairColor:'Brown'
    },
    {
      id:3,
      firstName: "Fillmore",
      lastName: 'Millard',
      age:50,
      hairColor:'Brown'
    },
    {
      id:4,
      firstName: "Smith",
      lastName: 'María',
      age:62,
      hairColor:'Green'
    }
  ]

  return (
  
        <ul className="container">
            {
              cards.map((cards)=> (
              
                <ul>
                  <PersonCard
                  firstName={cards.firstName}
                  lastName={cards.lastName}
                  age={cards.age}
                  hairColor={cards.hairColor}
                  >
                  </PersonCard>
                </ul>
              ))
            }
        </ul>
     
 
  );
}

export default App;
