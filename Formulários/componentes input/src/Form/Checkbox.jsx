import React from 'react'

const Checkbox = ({options}) => {
  function handleChange({target}){
    if(target.checked){
      setValue([...value], target.value)
    }else{
      setValue(value.filter((itemValue) => itemValue != target.value));
    }
  }
  return (
    <>
      {options.map((option) => (
        <label>
          <input type='checkbox' value={option} onChange={handleChange}/>
          {option}
        </label>
      ))}
    </>
  )
}

export default Checkbox
