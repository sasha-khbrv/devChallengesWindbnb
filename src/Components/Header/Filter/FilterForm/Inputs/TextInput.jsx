import React from 'react';
import { useField } from 'formik';

const TextInput = ({ label, ...props }) => {
  const classList = props.isactive === "true" ? "textInput textInput-active" : "textInput";
  const [field] = useField(props);
  return (
    <div className="filterItem textInputContainer">
      <label htmlFor={props.id || props.name} className="textInput--label">{label}</label>
      <input className={classList} {...field} {...props} />
    </div>
  );
};

export default TextInput;