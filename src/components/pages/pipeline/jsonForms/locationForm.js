export const jsonForm = {
  Location: {
    fields: [
      {
        name: 'Street Address',
        type: 'input',
        placeholder: '',
        id: 'streetAddress',
        validation: 'required',
      },
      {
        name: 'City',
        type: 'input',
        placeholder: 'city',
        id: 'city',
        validation: 'required',
      },
      {
        name: 'Zipcode',
        type: 'input',
        placeholder: 'zipcode',
        id: 'zipcode',
        validation: 'required',
      },
      {
        name: 'State',
        type: 'dropDown',
        placeholder: 'State',
        id: 'state',
        validation: 'required',
      },
    ],
  },
  SignUp: {
    fields: [
      {
        name: 'First Name',
        type: 'input',
        placeholder: 'first name',
        id: 'firstName',
        validation: 'required',
      },
      {
        name: 'Last Name',
        type: 'input',
        placeholder: 'last name',
        id: 'lastName',
        validation: 'required',
      },
      {
        name: 'Email',
        type: 'input',
        placeholder: 'email@example.com',
        id: 'email',
        validation: 'required',
      },
      {
        name: 'Password',
        type: 'input',
        placeholder: 'password',
        id: 'password',
        validation: 'required',
      },
      {
        name: 'Retype Password',
        type: 'input',
        placeholder: 'retype password',
        id: 'retypedPassword',
        validation: 'required',
      },
    ],
  },
};
export default jsonForm;
