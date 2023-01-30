import "./styles/form-input.styles.css"

const FormInput = ({ label, ...otherProps }) => {
  //the string interpolation is checking if something is typed into form
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} 
                form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput
