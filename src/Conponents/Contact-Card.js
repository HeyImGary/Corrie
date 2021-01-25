import { useState } from 'react';
import NewContactForm from './New-Contact-Form';

const ContactCard = ({ data, index, deleteUser, updateContact }) => {
  const [editing, isEditing] = useState(false);

  return editing ? (
    <NewContactForm
      InitialValues={data}
      index={index}
      isEditing={isEditing}
      newContact={false}
      updateContact={updateContact}
    />
  ) : (
    <div key={index} className={'Card'}>
      <p>
        Name: {data.first_name} {data.last_name}
      </p>
      <p>Phone: {data.phone}</p>
      <p>Email: {data.email}</p>
      <button onClick={() => isEditing(!editing)}>Edit</button>
      <button onClick={() => deleteUser(index)}>Delete</button>
    </div>
  );
};

export default ContactCard;
