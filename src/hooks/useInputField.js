import { useState } from 'react';

const useInputField = (inputInitialState) => {
   const [inputData, setInputData] = useState(inputInitialState);

   const handleChange = (e) =>
      setInputData({ ...inputData, [e.target.name]: e.target.value });
   const handleChecked = (e) =>
      setInputData({ ...inputData, [e.target.name]: e.target.checked });

   return {
      inputData,
      handleChange,
      handleChecked,
   };
};

export default useInputField;
