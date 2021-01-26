import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './Inputs/TextInput';

const FilterForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          location: '',
          guests: ''
        }}

        onSubmit={(values, { setSubmitting }) => {
          //Make the filter work!
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="filterContainer filterContent">
          <TextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Choose location"
            readOnly={true}
            isactive="true"
          />
          <TextInput
            label="Guests"
            name="guests"
            type="text"
            placeholder="Add guests"
            readOnly={true}
            isactive="false"
          />
          <button type="submit" className="btn btnSolid filterItem">
            <span className="material-icons">search</span>
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default FilterForm;