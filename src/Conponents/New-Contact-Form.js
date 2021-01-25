import { Formik, Field, Form } from 'formik';

const NewContactForm = ({
  updateContact,
  InitialValues,
  index,
  isEditing,
  newContact,
  toggleShow,
}) => {
  return (
    <Formik
      initialValues={{
        first_name: InitialValues.first_name,
        last_name: InitialValues.last_name,
        email: InitialValues.email,
        phone: InitialValues.phone,
      }}
      onSubmit={(values, { resetForm }) => {
        updateContact(values, newContact ? null : index);
        newContact ? resetForm() : isEditing(false);
      }}
    >
      {() => (
        <Form className={'Card'} key={index}>
          <label>First Name</label>
          <Field type='text' name='first_name' />
          <label>Last Name</label>
          <Field type='text' name='last_name' />
          <label>Phone</label>
          <Field type='text' name='phone' />
          <label>Email</label>
          <Field type='text' name='email' />
          <button type='submit'>{newContact ? 'Add' : 'Update'}</button>
          <button
            onClick={() => (newContact ? toggleShow(false) : isEditing(false))}
          >
            Cancel
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewContactForm;
