import './App.css';
import ContactCard from './Conponents/Contact-Card';

import { useState, useEffect } from 'react';

let Contact = [
  {
    first_name: 'David',
    last_name: 'Platt',
    phone: '01913478234',
    email: 'david.platt@corrie.co.uk',
  },
  {
    first_name: 'Jason',
    last_name: 'Grimshaw',
    phone: '01913478123',
    email: 'jason.grimshaw@corrie.co.uk',
  },
  {
    first_name: 'Ken',
    last_name: 'Barlow',
    phone: '019134784929',
    email: 'ken.barlow@corrie.co.uk',
  },
  {
    first_name: 'Rita',
    last_name: 'Sullivan',
    phone: '01913478555',
    email: 'rita.sullivan@corrie.co.uk',
  },
  {
    first_name: 'Steve',
    last_name: 'McDonald',
    phone: '01913478555',
    email: 'steve.mcdonald@corrie.co.uk',
  },
];

function App() {
  const [ContactInfo, setContactInfo] = useState(Contact);

  const deleteUser = (index) => {
    console.log(index);
    let tempUsers = [...ContactInfo];
    tempUsers.splice(index, 1);
    setContactInfo([...tempUsers]);
  };

  return (
    <div className='App'>
      <h1>Phone Book</h1>
      <button>Add New Contact</button>
      <div className={'Phone-Book'}>
        {ContactInfo.map((ContactDetails, index) => (
          <ContactCard
            index={index}
            data={ContactDetails}
            deleteUser={deleteUser}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
