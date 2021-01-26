import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, fieldActive, setFieldActive, ...props }) => {
  const classList = (fieldActive === props.name) ? "textInput textInput-active" : "textInput";
  const [field] = useField(props);
  return (
    <div className="filterItem textInputContainer">
      <label htmlFor={props.id || props.name} className="textInput--label">{label}</label>
      <input className={classList} {...field} {...props} onClick={() => setFieldActive(props.name)}/>
    </div>
  );
};

export default TextInput;