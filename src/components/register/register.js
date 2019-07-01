import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import * as Yup from 'yup';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormController } from '../FormControler/FormController';
import styles from './register.module.css';
import { LawnnannyapiBridge } from '../../lawnnanny-back-end-adapter-bridges/LawnnannyApiBridge';

export const SignupModal = (props) => {
  const firstNameIsTooShortMessage = 'First name is too short!';
  const firstNameISTooLongMessage = 'First name is too long!';
  const lastNameIsTooShortMessage = 'Last name is too short!';
  const lastNameISTooLongMessage = 'Last name is too long!';
  const passwordIsTooShortMessage = 'Password is too short!';

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, firstNameIsTooShortMessage)
      .max(30, firstNameISTooLongMessage)
      .required('Required'),
    lastName: Yup.string()
      .min(2, lastNameIsTooShortMessage)
      .max(30, lastNameISTooLongMessage)
      .required('Required'),
    email: Yup.string()
      .email()
      .required('Required'),
    password: Yup.string()
      .min(8, passwordIsTooShortMessage)
      .required(),
  });

  return (
    <div>
      <Button onClick={props.toggleSignupModal} className={styles.registerButton}>
        Register
      </Button>
      <Dialog open={props.isSignupModalOpen} onClose={props.toggleSignupModal}>
        <DialogTitle>Get Started</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await LawnnannyapiBridge.registerUser(values);
              return setSubmitting(false);
            }}
          >
            {() => (
              <div>
                <Form className={styles.form}>
                  <div id="nameFields" className={styles.fieldRow}>
                    <div id="firstnameField">
                      <Field
                        name="firstName"
                        render={({ field, form }) => (
                          <div>
                            <FormController
                              type="text"
                              label="first name"
                              id="firstNameFormController"
                              form={form}
                              field={field}
                            />
                          </div>
                        )}
                      />
                      <ErrorMessage name="firstName" component="div" />
                    </div>
                    <div id="lastnameField">
                      <Field
                        name="lastName"
                        render={({ field, form }) => (
                          <div>
                            <FormController
                              type="text"
                              label="last name"
                              id="lastNameFormController"
                              form={form}
                              field={field}
                            />
                          </div>
                        )}
                      />
                      <ErrorMessage name="lastName" component="div" />
                    </div>
                  </div>
                  <div id="emailField" className={styles.fieldColumn}>
                    <Field
                      className={styles.fieldColumn}
                      name="email"
                      render={({ field, form }) => (
                        <div>
                          <FormController
                            type="email"
                            label="email"
                            id="emailFormController"
                            form={form}
                            field={field}
                          />
                        </div>
                      )}
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div id="passwordField" className={styles.fieldColumn}>
                    <Field
                      className={styles.fieldColumn}
                      name="password"
                      render={({ field, form }) => (
                        <div>
                          <FormController
                            type="password"
                            label="password"
                            id="passwordFormController"
                            form={form}
                            field={field}
                          />
                        </div>
                      )}
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                </Form>
              </div>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

SignupModal.propTypes = {
  isSignupModalOpen: PropTypes.func,
  toggleSignupModal: PropTypes.func,
};

SignupModal.defaultProps = {
  isSignupModalOpen: PropTypes.func,
  toggleSignupModal: PropTypes.func,
};
export default SignupModal;
