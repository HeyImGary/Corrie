import './App.css';
import ContactCard from './Conponents/Contact-Card';
import NewContactForm from './Conponents/New-Contact-Form';

import { useEffect, useState, useForceUpdate, useMemo } from 'react';

function App() {
  const initialState = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
  };

  const [ContactInfo, setContactInfo] = useState([]);
  const [show, toggleShow] = useState(false);
  const [searchedContact, setSearchedContact] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch('http://localhost:3001/');
      const json = await response.json();
      setContactInfo(json);
      setSearchedContact(json);
    }
    fetchContacts();
  }, []);

  const deleteUser = (index) => {
    setContactInfo(ContactInfo.filter((_, i) => i !== index));
  };

  const addContact = (values) => {
    setContactInfo([...ContactInfo, values]);
  };

  const updateContact = (values, index) => {
    setContactInfo(
      ContactInfo.map((item, i) => (i === index ? { ...values } : item))
    );
  };

  const filterUsers = (e) => {
    setSearchedContact(
      ContactInfo.filter((x) =>
        x.first_name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className='App'>
      <h1>Phone Book </h1>
      <div className={'Card'}>
        <input
          placeholder='Search Phone Book. e.g. David'
          onChange={(e) => filterUsers(e)}
        />
      </div>
      <br />
      {show ? (
        <NewContactForm
          InitialValues={initialState}
          newContact={true}
          updateContact={addContact}
          toggleShow={toggleShow}
        />
      ) : (
        <button onClick={() => toggleShow(!show)}>Add New Contact</button>
      )}
      <div className={'Phone-Book'}>
        {searchedContact.map((ContactDetails, index) => (
          <ContactCard
            index={index}
            data={ContactDetails}
            deleteUser={deleteUser}
            updateContact={updateContact}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
