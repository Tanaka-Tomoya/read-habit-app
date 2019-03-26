import { Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import React from 'react';

const Hoge = () => {
  return (
    <Field
      component={Form.Input}
      label="First name"
      name="firstName"
      placeholder="First name"
    />
  );
};
export default Hoge;
