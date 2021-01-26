import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from './Inputs/TextInput';

const FilterForm = () => {
  return (
    <div className="filterContainer filterContainer-full">
      <Formik
        initialValues={{
          location: '',
          guests: ''
        }}

        validationSchema={Yup.object({
          location: Yup.string()
            .max(15, 'Must be 15 characters or less'),
          guests: Yup.number()
            .max(20, 'Must be a number'),
        })}

        onSubmit={(values, { setSubmitting }) => {
          //Make the filter work!
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <TextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Choose location"
            value=""
          />
          <TextInput
            label="Guests"
            name="guests"
            type="text"
            placeholder="Add guests"
            value=""
          />
          <button type="submit" className="btn btnSolid">
            <span className="material-icons">search</span>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterForm;