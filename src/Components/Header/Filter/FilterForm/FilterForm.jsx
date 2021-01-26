import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from './Inputs/TextInput';

const FilterForm = ({fieldActive, setFieldActive, sumOfGuests, location, setCardsFilter, filterState, setFilterState}) => {
  return (
    <>
      <Formik
        initialValues={{
          location: '',
          guests: ''
        }}

        onSubmit={(values, { setSubmitting }) => {
          setCardsFilter(location);
          setFilterState(!filterState);
        }}
      >
        <Form className="filterContainer filterContent">
          <TextInput
            fieldActive={fieldActive}
            setFieldActive={setFieldActive}
            label="Location"
            name="location"
            type="text"
            placeholder="Choose location"
            readOnly={true}
            value={location}             
          />
          <TextInput
            fieldActive={fieldActive}
            setFieldActive={setFieldActive}
            label="Guests"
            name="guests"
            type="text"
            placeholder="Add guests"
            readOnly={true}
            value={ sumOfGuests > 0 ? sumOfGuests : ""}            
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