import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDocTitle } from '../components/CustomHook';
import { useNavigate } from 'react-router-dom';
import { useCreateOrUpdate } from '../Hooks/useCreateOrUpdate';
import AuthContext from '../context/authContext/AuthContext';

const Contact = () => {
  useDocTitle('GreenTech - Login');
  const navigate = useNavigate();

  const { Login } = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: '',
  };

  const { mutate } = useCreateOrUpdate({
    url: `/user_auth/login/nt/`,
  });

  const validations = yup.object({
    email: yup
      .string()
      .email('Invalid email format')
      .trim('This field cannot include leading and trailing spaces')
      .strict(true)
      .required('Email is required!'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required!'),
  });

  return (
    <div id="contact" className="flex justify-center items-center mt-12 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <Formik
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={(values) => {
            mutate(values, {
              onSuccess: (data) => {
                const loggedIn = Login(data?.data);
                if (loggedIn) {
                  navigate('/');
                }
              },
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:px-20 mx-auto rounded-2xl shadow-2xl">
                <div className="flex">
                  <h1 className="font-bold text-center lg:text-left text-lime-600 uppercase text-4xl">Login</h1>
                </div>
                <div className="grid grid-cols-1 gap-5 my-12">
                  <div>
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      placeholder="Enter valid details"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600 mt-2" />
                  </div>
                  <div>
                    <Field
                      className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="password"
                      name="password"
                      placeholder="At least 8 characters"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-600 mt-2" />
                  </div>
                </div>
                <div className="my-2 w-full">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-lime-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                    disabled={isSubmitting}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
