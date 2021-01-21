const ContactCard = ({ data, index, deleteUser }) => {
  return (
    <div key={index} className={'Contact-Card'}>
      <p>
        Name: {data.first_name} {data.last_name}
      </p>
      <p>Phone: {data.phone}</p>
      <p>Email: {data.email}</p>
      <button>Edit</button>
      <button onClick={() => deleteUser(index)}>Delete</button>
    </div>
  );
};

export default ContactCard;
